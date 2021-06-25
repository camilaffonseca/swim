import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Routes from '#/routes'

import { AuthProvider } from '#/context/auth'
import { GeolocationProvider } from '#/context/geolocation'

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <GeolocationProvider>
          <Routes />
        </GeolocationProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App
