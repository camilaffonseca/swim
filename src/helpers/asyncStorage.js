import AsyncStorage from '@react-native-community/async-storage'

const appPrefix = '@TestprojectReactnativeStylesheet'

export const getStoragedToken = () => AsyncStorage.getItem(`${appPrefix}:token`)

export const setStoragedToken = value =>
  AsyncStorage.setItem(`${appPrefix}:token`, value)

export const removeStoragedToken = () =>
  AsyncStorage.removeItem(`${appPrefix}:token`)
