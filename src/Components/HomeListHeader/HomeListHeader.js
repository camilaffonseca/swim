import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import SearchBar from '#/components/SearchBar'
import TextComponent from '#/components/TextComponent'
import InfoCard from '#/components/InfoCard'

import { useUser } from '#/context/auth'
import styles from './styles'

const HomeListHeader = () => {
  const { logout } = useUser()

  const handleLogout = () => {
    logout()
  }

  return (
    <View>
      <SearchBar />
      <TouchableOpacity onPress={handleLogout}>
        <TextComponent>Logout</TextComponent>
      </TouchableOpacity>
      <TextComponent customStyle={styles.title}>
        Let's go hunting for offers, Raj!
      </TextComponent>
      <InfoCard />
      <TextComponent customStyle={styles.offersTitle}>
        Offers Near You
      </TextComponent>
    </View>
  )
}

export default HomeListHeader
