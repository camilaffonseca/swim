import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

import TextComponent from '#/components/TextComponent'
import Modal from '#/components/Modal'

import logo from '#/images/logo.png'
import arrow from '#/images/arrow.png'
import locationIcon from '#/images/location-icon.png'

import styles from './styles'

const Header = ({ headerData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TouchableOpacity style={styles.locationButton} onPress={toggleModal}>
        <TextComponent style={styles.buttonText}>{headerData}</TextComponent>
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
          Your Location
        </TextComponent>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.getLocationButton}>
          <Image source={locationIcon} style={styles.locationIcon} />
          <View>
            <TextComponent customStyle={styles.text1}>
              Use My Current Location
            </TextComponent>
            <TextComponent customStyle={styles.text2}>
              Allow permission
            </TextComponent>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default Header
