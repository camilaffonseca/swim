import { StyleSheet } from 'react-native'

import colors from '#/constants/colors'

export default StyleSheet.create({
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  modal: {
    justifyContent: 'flex-end',
    marginHorizontal: 8,
    marginVertical: 16,
  },
})
