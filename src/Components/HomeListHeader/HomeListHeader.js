import React from 'react'

import { View } from 'react-native'

import SearchBar from '../SearchBar'
import TextComponent from '../TextComponent'
import InfoCard from '../InfoCard'

import styles from './styles'

const HomeListHeader = () => (
  <View>
    <SearchBar />
    <TextComponent
      customStyle={styles.title}>
      Let's go hunting for offers, Raj!
    </TextComponent>
    <InfoCard />
    <TextComponent
      customStyle={styles.offersTitle}>
      Offers Near You
    </TextComponent>
  </View>
)

export default HomeListHeader
