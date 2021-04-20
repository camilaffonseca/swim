import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import {
  getStoragedToken,
  setStoragedToken,
  removeStoragedToken,
} from '../helpers/asyncStorage'
import { signIn, validateSession } from '../services/auth'

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
      try {
        const storagedToken = await getStoragedToken()

        if (!storagedToken) {
          logout()
          return
        }

        const response = await validateSession({ token: storagedToken })

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
    const response = await signIn({ email, password })

    if (response?.statusCode !== 200) {
      logout()
      throw new Error(response)
    }

    await setStoragedToken(response?.token)

    setUser(response.user)
  }

  const logout = async () => {
    await removeStoragedToken()

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
