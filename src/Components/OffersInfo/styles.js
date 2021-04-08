import { StyleSheet } from 'react-native'

import { red } from '../../modules/colors'

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
    backgroundColor: red,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 4.5,
  },
})
