import React from 'react'
import { View, Image } from 'react-native'

import TextComponent from '../TextComponent'

const cardsIcon = require('../../images/cards.png')
import styles from './styles'

const InfoCard = () => (
  <View style={styles.container}>
    <Image style={styles.cardsIcon} source={cardsIcon} />
    <View style={styles.info}>
      <TextComponent customStyle={styles.cardTitle}>
        Link Your First Card
      </TextComponent>
      <TextComponent customStyle={styles.cardDescription}>
        Then you’ll automatically be rewarded with coins whenever making
        purchases
      </TextComponent>
    </View>
  </View>
)

export default InfoCard
