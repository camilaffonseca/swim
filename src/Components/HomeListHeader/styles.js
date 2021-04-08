import { StyleSheet, Platform } from 'react-native'

const getFontWeight = () => (Platform.OS === 'ios' ? '800' : 'bold')

export default StyleSheet.create({
  title: {
    fontSize: 28,
    marginVertical: 32,
    lineHeight: 32,
    fontWeight: getFontWeight(),
  },
  offersTitle: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '700',
    marginTop: 80,
    marginBottom: 24,
  },
})
