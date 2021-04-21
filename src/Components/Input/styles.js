import { StyleSheet } from 'react-native'

import colors from '#/constants/colors'

export default StyleSheet.create({
  label: {
    color: colors.gray,
  },
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightGray2,
    height: 36,
  },
  inputError: {
    borderBottomColor: colors.red,
  },
  errorTextColor: {
    color: colors.red,
  },
  errorText: {
    fontSize: 10,
    position: 'relative',
  },
})
