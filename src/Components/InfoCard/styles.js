import { StyleSheet } from 'react-native'

import { white, black, lightGray } from '../../modules/colors'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: white,
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderColor: lightGray,
    shadowColor: black,
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  cardsIcon: {
    alignSelf: 'center',
    marginRight: 21,
  },
  info: {
    flex: 1,
  },
})
