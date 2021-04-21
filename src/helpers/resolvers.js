import { Platform } from 'react-native'

export const resolveByPlatform = ({ ios, android }) =>
  Platform.OS === 'ios' ? ios : android
