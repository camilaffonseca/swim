import React from 'react'
import { View, TextInput } from 'react-native'

import TextComponent from '../TextComponent'

import { gray } from '../../modules/colors'
import styles from './styles'

const Input = ({ label, errors, style, ...props }) => {
  const inputStyleMixin = errors
    ? [styles.input, styles.inputError]
    : styles.input
  const labelErrorMixin = errors
    ? [styles.label, styles.errorTextColor]
    : styles.label

  return (
    <View style={style}>
      <TextComponent customStyle={labelErrorMixin}>{label}</TextComponent>
      <TextInput
        placeholderTextColor={gray}
        autoCorrect={false}
        spellCheck={false}
        autoCapitalize="none"
        returnKeyType="next"
        selectionColor={gray}
        style={inputStyleMixin}
        {...props}
      />
      <TextComponent customStyle={[styles.errorTextColor, styles.errorText]}>
        {errors}
      </TextComponent>
    </View>
  )
}

export default Input
