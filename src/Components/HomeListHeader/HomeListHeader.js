import React from 'react'

import { View, Platform } from 'react-native'

import SearchBar from '../SearchBar'
import TextComponent from '../TextComponent'
import InfoCard from '../InfoCard'

const getFontWeight = () => (Platform.OS === 'ios' ? '800' : 'bold')

const HomeListHeader = () => (
  <View>
    <SearchBar />
    <TextComponent
      customStyle={{
        fontSize: 28,
        marginVertical: 32,
        lineHeight: 32,
        fontWeight: getFontWeight(),
      }}>
      Let's go hunting for offers, Raj!
    </TextComponent>
    <InfoCard />
    <TextComponent
      customStyle={{
        fontSize: 22,
        lineHeight: 24,
        fontWeight: '700',
        marginTop: 80,
        marginBottom: 24,
      }}>
      Offers Near You
    </TextComponent>
  </View>
)

export default HomeListHeader
