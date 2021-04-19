import { StyleSheet } from 'react-native'

import { gray, lightGray2, red } from '../../modules/colors'

export default StyleSheet.create({
  label: {
    color: gray,
  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: lightGray2,
    height: 36,
  },
  inputError: {
    borderBottomColor: red,
  },
  errorTextColor: {
    color: red,
  },
  errorText: {
    fontSize: 10,
    position: 'relative'
  }
})
