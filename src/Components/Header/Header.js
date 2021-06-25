import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import TextComponent from '#/components/TextComponent'
import Modal from '#/components/Modal'

import logo from '#/images/logo.png'
import arrow from '#/images/arrow.png'
import locationIcon from '#/images/location-icon.png'

import { useGeolocation } from '#/context/geolocation'

import styles from './styles'

const Header = ({ headerData, setHeaderData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { resolveCoords, currentLocation, isLoading } = useGeolocation()

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleLocationPress = () => {
    resolveCoords()
  }

  useEffect(() => {
    if (currentLocation.city && currentLocation.state) {
      setHeaderData(`${currentLocation.city}, ${currentLocation.state}`)
    }
  }, [currentLocation])

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TouchableOpacity style={styles.locationButton} onPress={toggleModal}>
        <TextComponent style={styles.buttonText}>
          {isLoading ? 'Loading...' : headerData}
        </TextComponent>
        <Image source={arrow} style={styles.arrow} />
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onCloseRequest={toggleModal}
        customStyle={{
          justifyContent: 'flex-end',
          marginHorizontal: 0,
          marginTop: 0,
          marginBottom: 8,
        }}>
        <View style={styles.swipeIndicator} />
        <TextComponent customStyle={styles.modalTitle}>
          {isLoading ? 'Loading...' : 'Your Location'}
        </TextComponent>
        <View style={styles.separator} />
        <TouchableOpacity
          onPress={handleLocationPress}
          style={styles.getLocationButton}>
          <Image source={locationIcon} style={styles.locationIcon} />
          <View>
            <TextComponent customStyle={styles.text1}>
              {currentLocation.city && currentLocation.state
                ? `${currentLocation.city}, ${currentLocation.state}`
                : 'Use My Current Location'}
            </TextComponent>
            <TextComponent customStyle={styles.text2}>
              {currentLocation.city && currentLocation.state
                ? 'Based on your location'
                : 'Allow permission'}
            </TextComponent>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default Header
