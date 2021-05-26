import { StyleSheet } from 'react-native'

import colors from '#/constants/colors'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderColor: colors.lightGray1,
    shadowColor: colors.black,
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
  cardDescription: { lineHeight: 16, color: colors.gray },
})
