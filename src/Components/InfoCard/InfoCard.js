import React from 'react'

import { View, Image } from 'react-native'

import TextComponent from '../TextComponent'

import styles from './styles'

const cardsIcon = require('../../images/cards.png')

const InfoCard = () => (
  <View style={styles.container}>
    <Image style={styles.cardsIcon} source={cardsIcon} />
    <View style={styles.info}>
      <TextComponent
        customStyle={{ fontSize: 22, fontWeight: '700', lineHeight: 24 }}>
        Link Your First Card
      </TextComponent>
      <TextComponent customStyle={{ lineHeight: 16, color: '#AFB0B3' }}>
        Then you’ll automatically be rewarded with coins whenever making
        purchases
      </TextComponent>
    </View>
  </View>
)

export default InfoCard
