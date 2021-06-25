import instance from '#/providers/fetchClient'

export const getLocation = ({ latitude, longitude }) =>
  instance.get(
    `/location/cities/coordenates?lat=${latitude}&lng=${longitude}&distance=10`,
  )
