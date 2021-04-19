import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { SignIn, ValidateSession } from '../services/auth'

const AuthContext = createContext({ signed: true })

const useUser = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a AuthProvider')
  }

  return context
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStoragedData = async () => {
      const storagedToken = await AsyncStorage.getItem(
        '@TestprojectReactnativeStylesheet:token',
      )

      if (!storagedToken) {
        logout()
        setLoading(false)
        return
      }

      try {
        const response = await ValidateSession({ token: storagedToken })

        setUser(response?.user)
        setToken(response?.token)
      } catch {
        logout()
      } finally {
        setLoading(false)
      }
    }

    loadStoragedData()
  }, [])

  const getToken = () => token

  const login = async ({ email, password }) => {
    const response = await SignIn({ email, password })

    if (response?.statusCode !== 200) {
      logout()
      throw new Error(response)
    }

    await AsyncStorage.setItem(
      '@TestprojectReactnativeStylesheet:token',
      response?.token,
    )

    setUser(response.user)
  }

  const logout = async () => {
    await AsyncStorage.setItem('@TestprojectReactnativeStylesheet:token', '')

    setUser(undefined)
    setToken(undefined)
    setLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, login, logout, getToken, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useUser, AuthProvider }
