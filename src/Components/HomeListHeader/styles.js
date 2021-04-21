import { StyleSheet } from 'react-native'

import { resolveByPlatform } from '#/helpers/resolvers'

export default StyleSheet.create({
  title: {
    fontSize: 28,
    marginVertical: 32,
    lineHeight: 32,
    fontWeight: resolveByPlatform({ ios: '800', android: 'bold' }),
  },
  offersTitle: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '700',
    marginTop: 80,
    marginBottom: 24,
  },
})
