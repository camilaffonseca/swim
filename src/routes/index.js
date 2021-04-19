import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import UnauthenticatedRoutes from './unauthenticated.routes'
import AuthenticatedRoutes from './authenticated.routes'

import { useUser } from '../context/auth'

const Routes = () => {
  const { signed, loading } = useUser()

  if (loading)
    return (
      <View style={style.viewStyle}>
        <ActivityIndicator color="#1E0F2F" size="large" />
      </View>
    )

  return signed ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
}

const style = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Routes
