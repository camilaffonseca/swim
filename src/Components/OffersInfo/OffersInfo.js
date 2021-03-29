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
        <TextComponent customStyle={{ color: '#D51648', marginBottom: 2 }}>
          {offerData.name}
        </TextComponent>
        <TextComponent
          customStyle={{
            lineHeight: 20,
            fontWeight: '700',
            fontSize: 16,
            marginBottom: 8,
          }}>
          Get a discount on your first hair cut and blow dry.
        </TextComponent>
        <View style={styles.prices}>
          <TextComponent
            customStyle={{
              color: '#AFB0B3',
              marginRight: 8,
              textDecorationLine: 'line-through',
              fontWeight: '700',
              lineHeight: 16,
            }}>
            {offerData.oldPrice}
          </TextComponent>
          <TextComponent
            customStyle={{
              fontSize: 16,
              lineHeight: 20,
              fontWeight: '700',
              marginRight: 16,
            }}>
            {offerData.newPrice}
          </TextComponent>
          <View style={styles.discountContainer}>
            <TextComponent
              customStyle={{
                lineHeight: 16,
                fontWeight: '700',
                color: '#fff',
              }}>
              {offerData.discount}
            </TextComponent>
          </View>
        </View>
      </View>
    </View>
  </View>
)

export default OffersInfo
