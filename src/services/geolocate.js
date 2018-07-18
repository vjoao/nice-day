import axios from 'axios'

function geocodeToLocation (geocoding) {
  const locationNames = geocoding.results.map(result => result.formatted_address)
  if (locationNames.length > 2) {
    return locationNames[locationNames.length - 2]
  }
  return locationNames[0]
}

export default {
  geocodePosition (position) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&latlng=${position.latitude},${position.longitude}`)
      .then(response => response.data)
      .then(geocoding => {
        if (geocoding.results && geocoding.results.length) {
          return geocodeToLocation(geocoding)
        }
        return 'Could not find your location'
      })
  },
  getCurrentPosition (options) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(success => resolve(success), error => reject(error), options)
    })
  }
}
