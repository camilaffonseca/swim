import { request, PERMISSIONS, RESULTS } from 'react-native-permissions'
import { Platform, Alert } from 'react-native'

const PLATFORM_LOCATION_PERMISSIONS = {
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
}

const REQUEST_PERMISSION_TYPE = {
  location: PLATFORM_LOCATION_PERMISSIONS,
}

export const PERMISSION_TYPE = {
  location: 'location',
}

export const resolvePermission = async type => {
  const currentPermission = REQUEST_PERMISSION_TYPE[type][Platform.OS]

  if (!currentPermission) return false

  try {
    const result = await request(currentPermission)

    switch (result) {
      case RESULTS.GRANTED:
        return true

      case RESULTS.UNAVAILABLE:
        return false

      case RESULTS.LIMITED:
        Alert.alert(
          'The geolocation feature has limitations on this device and the feature may not work correctly.',
        )
        return true

      case RESULTS.BLOCKED:
        return false

      default:
        return false
    }
  } catch {
    return false
  }
}
