import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '#/views/Login'

const UnauthenticatedStack = createStackNavigator()

const UnauthenticatedRoutes = () => (
  <UnauthenticatedStack.Navigator headerMode="none">
    <UnauthenticatedStack.Screen name="Login" component={Login} />
  </UnauthenticatedStack.Navigator>
)

export default UnauthenticatedRoutes
