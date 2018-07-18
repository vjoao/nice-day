import geolocationService from '@/services/geolocate'
import { SET_ADDRESS, SET_ERROR, SET_POSITION } from '../mutationTypes'

export default {
  namespaced: true,
  state: {
    position: {
      latitude: 0,
      longitude: 0,
      address: ''
    }
  },
  mutations: {
    [SET_ADDRESS] (state, address) {
      state.position.address = address
    },
    [SET_POSITION] (state, { latitude, longitude }) {
      state.position.latitude = latitude
      state.position.longitude = longitude
    }
  },
  actions: {
    requestPosition ({ commit }) {
      return geolocationService.getCurrentPosition()
        .then(({ coords }) => {
          commit(SET_POSITION, coords)
          return geolocationService.geocodePosition(coords)
        })
        .then(address => {
          commit(SET_ADDRESS, address)
        })
        .catch(error => {
          commit(SET_ERROR, error.message, { root: true })
        })
    }
  }
}
