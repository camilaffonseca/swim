import React from 'react'
import { View } from 'react-native'
import ModalRN from 'react-native-modal'

import styles from './styles'

const Modal = ({ isVisible, onCloseRequest, children, customStyle }) => (
  <ModalRN
    isVisible={isVisible}
    onBackButtonPress={onCloseRequest}
    onBackdropPress={onCloseRequest}
    onSwipeComplete={onCloseRequest}
    swipeDirection={['down', 'left', 'right']}
    style={styles.modal}>
    <View style={[styles.modalView, customStyle]}>{children}</View>
  </ModalRN>
)

export default Modal
