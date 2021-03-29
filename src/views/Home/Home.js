import React from 'react'

import { SafeAreaView, View, FlatList, StatusBar } from 'react-native'

import OffersInfo from '../../Components/OffersInfo'
import HomeListHeader from '../../Components/HomeListHeader'
import Separator from '../../Components/Separator'

import styles from './styles'

const offersInfoData = [
  {
    id: 1,
    image: require('../../images/offersInfoImages/haircut-image.png'),
    logo: require('../../images/offersInfoImages/haircut-logo.png'),
    name: 'HAIRCUT',
    oldPrice: '$ 10,99',
    newPrice: '$ 5,49',
    discount: '-50%',
  },
  {
    id: 2,
    image: require('../../images/offersInfoImages/mcdonalds-image.png'),
    logo: require('../../images/offersInfoImages/mcdonalds-logo.png'),
    name: "MCDONALD'S",
    oldPrice: '$ 10,99',
    newPrice: '$ 5,49',
    discount: '-50%',
  },
]

const renderOffersInfo = offerData => <OffersInfo offerData={offerData} />

const Home = () => (
  <View style={styles.container}>
    <SafeAreaView>
      <FlatList
        ItemSeparatorComponent={Separator}
        data={offersInfoData}
        renderItem={renderOffersInfo}
        keyExtractor={offerData => offerData.id}
        ListHeaderComponent={HomeListHeader}
      />
    </SafeAreaView>
  </View>
)

export default Home
