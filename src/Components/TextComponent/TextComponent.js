import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const TextComponent = ({ children, customStyle }) => (
  <View>
    <Text style={[styles.textStyle, customStyle]}>{children}</Text>
  </View>
)

export default TextComponent
