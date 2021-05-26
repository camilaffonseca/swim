import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '#/views/Home'

import Header from '#/components/Header'

const AuthenticatedStack = createStackNavigator()

const AuthenticatedRoutes = () => {
  const [headerData, setHeaderData] = useState('Get Your Location')

  const commonHeader = {
    headerTitle: props => (
      <Header
        headerData={headerData}
        setHeaderData={setHeaderData}
        {...props}
      />
    ),
  }

  return (
    <AuthenticatedStack.Navigator screenOptions={commonHeader}>
      <AuthenticatedStack.Screen name="Home" component={Home} />
    </AuthenticatedStack.Navigator>
  )
}

export default AuthenticatedRoutes
