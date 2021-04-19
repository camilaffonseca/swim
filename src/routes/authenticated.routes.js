import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../views/Home'

const AuthenticatedStack = createStackNavigator()

const AuthenticatedRoutes = () => (
  <AuthenticatedStack.Navigator headerMode='none'>
    <AuthenticatedStack.Screen name='Home' component={Home} />
  </AuthenticatedStack.Navigator>
)

export default AuthenticatedRoutes
