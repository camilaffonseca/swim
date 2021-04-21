import { StyleSheet } from 'react-native'

import colors from '#/constants/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 3,
  },
  searchIcon: {
    margin: 16,
  },
  textInput: {
    flex: 1,
  },
})
