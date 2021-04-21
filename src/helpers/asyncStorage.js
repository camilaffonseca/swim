import AsyncStorage from '@react-native-community/async-storage'

import { authTokenNameKey } from '#/constants/storage'

export const getStoragedToken = () => AsyncStorage.getItem(authTokenNameKey)

export const setStoragedToken = value =>
  AsyncStorage.setItem(authTokenNameKey, value)

export const removeStoragedToken = () =>
  AsyncStorage.removeItem(authTokenNameKey)
