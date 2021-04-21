import { StyleSheet } from 'react-native'

import colors from '#/constants/colors'

export default StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 16,
  },
  logo: {
    opacity: 0.04,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountContainer: {
    backgroundColor: colors.red,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 4.5,
  },
  offerName: { color: colors.red, marginBottom: 2 },
  offerDescription: {
    lineHeight: 20,
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
  },
  offerOldPrice: {
    color: colors.gray,
    marginRight: 8,
    textDecorationLine: 'line-through',
    fontWeight: '700',
    lineHeight: 16,
  },
  offerNewPrice: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    marginRight: 16,
  },
  offerDiscount: {
    lineHeight: 16,
    fontWeight: '700',
    color: colors.white,
  },
})
