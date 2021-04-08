import { StyleSheet } from 'react-native'

import { white, black, lightGray, gray } from '../../modules/colors'

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
  cardTitle: { fontSize: 22, fontWeight: '700', lineHeight: 24 },
  cardDescription: { lineHeight: 16, color: gray },
})
