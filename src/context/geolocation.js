import React, { createContext, useState, useEffect, useContext } from 'react'
import { Alert } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

import { PERMISSION_TYPE, resolvePermission } from '#/helpers/permissions'

import { getLocation } from '#/services/geolocation'

const GeolocationContext = createContext({})

const useGeolocation = () => {
  const context = useContext(GeolocationContext)

  if (context === undefined) {
    throw new Error('useGeolocation must be used within a GeolocationProvider')
  }

  return context
}

const GeolocationProvider = ({ children }) => {
  const [currentCoords, setCurrentCoords] = useState({
    latitude: undefined,
    longitude: undefined,
  })
  const [currentLocation, setCurrentLocation] = useState({
    city: undefined,
    state: undefined,
  })
  const [isLoadingCoords, setIsLoadingCoords] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)

  const resolveCoords = async () => {
    const result = await resolvePermission(PERMISSION_TYPE.location)

    if (result) {
      setIsLoadingCoords(true)
      Geolocation.getCurrentPosition(
        position => {
          setIsLoadingCoords(false)
          setCurrentCoords({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude,
          })
        },
        () => {
          setIsLoadingCoords(false)
          Alert.alert('Unable to use geolocation service on this device.')
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      )
    } else {
      setIsLoadingCoords(false)
      Alert.alert('Unable to use geolocation service on this device.')
    }
  }

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setIsLoadingLocation(true)
        const { data } = await getLocation(currentCoords)
        setCurrentLocation({ city: data?.name, state: data?.stateCode })
      } catch {
        Alert.alert('Unable to use geolocation service on this device.')
      } finally {
        setIsLoadingLocation(false)
      }
    }

    if (currentCoords.latitude && currentCoords.longitude) {
      fetchLocation()
    }
  }, [currentCoords])

  return (
    <GeolocationContext.Provider
      value={{
        resolveCoords,
        currentLocation,
        isLoading: isLoadingCoords || isLoadingLocation,
      }}>
      {children}
    </GeolocationContext.Provider>
  )
}

export { useGeolocation, GeolocationProvider }
