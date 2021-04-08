import React from 'react'

import { View, Image } from 'react-native'

import TextComponent from '../TextComponent'

import styles from './styles'

const OffersInfo = ({ offerData: { item: offerData } }) => (
  <View>
    <Image style={styles.image} source={offerData.image} />
    <View style={styles.infoContainer}>
      <Image source={offerData.logo} />
      <View style={styles.info}>
        <TextComponent customStyle={styles.offerName}>
          {offerData.name}
        </TextComponent>
        <TextComponent customStyle={styles.offerDescription}>
          {offerData.description}
        </TextComponent>
        <View style={styles.prices}>
          <TextComponent customStyle={styles.offerOldPrice}>
            {offerData.oldPrice}
          </TextComponent>
          <TextComponent customStyle={styles.offerNewPrice}>
            {offerData.newPrice}
          </TextComponent>
          <View style={styles.discountContainer}>
            <TextComponent customStyle={styles.offerDiscount}>
              {offerData.discount}
            </TextComponent>
          </View>
        </View>
      </View>
    </View>
  </View>
)

export default OffersInfo
