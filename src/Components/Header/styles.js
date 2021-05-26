import { StyleSheet, Dimensions } from 'react-native'

import colors from '#/constants/colors'

const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth,
    paddingHorizontal: 20,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: 16,
    height: 10,
  },
  buttonText: {
    color: colors.darkBlue,
    fontWeight: '500',
    lineHeight: 20,
  },
  swipeIndicator: {
    height: 4,
    width: 64,
    backgroundColor: colors.lightGray,
    marginVertical: 16,
  },
  modalTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.lightGray2,
  },
  locationIcon: {
    height: 24,
    width: 24,
    margin: 16,
  },
  getLocationButton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    borderColor: colors.lightGray0,
    marginHorizontal: 16,
    marginVertical: 24,
    flexDirection: 'row',
    width: 330,
    shadowColor: colors.black,
    shadowOpacity: 0.04,
    shadowRadius: 4,
    shadowOffset: { width: -4, height: 4 },
    elevation: 1,
  },
  text1: {
    fontWeight: '400',
    marginTop: 13,
    lineHeight: 20,
  },
  text2: {
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 10,
    color: colors.lightGray3,
    marginBottom: 13,
  },
})
