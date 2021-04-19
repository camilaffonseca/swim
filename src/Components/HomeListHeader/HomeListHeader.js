import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import SearchBar from '../SearchBar'
import TextComponent from '../TextComponent'
import InfoCard from '../InfoCard'

import { useUser } from '../../context/auth'
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
