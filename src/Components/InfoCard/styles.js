import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderColor: '#E6E6E6',
    shadowColor: '#000',
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
