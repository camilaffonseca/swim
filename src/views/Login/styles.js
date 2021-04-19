import { StyleSheet } from 'react-native'

import { yellow, white, blue } from '../../modules/colors'

export default StyleSheet.create({
  background: {
    height: '100%',
    minHeight: 100,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '700',
    color: yellow,
    marginLeft: 16,
    marginBottom: 13,
    maxWidth: 230
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  image: {
    width: 115,
    resizeMode: 'contain',
  },
  form: {
    paddingHorizontal: 16
  },
  buttonText: {
    color: white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24
  },
  button: {
    backgroundColor: blue,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 40
  },
  marginTopInput: {
    marginTop: 28
  }
})
