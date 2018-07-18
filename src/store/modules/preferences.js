import { SET_PREFERENCES } from '../mutationTypes'

export default {
  namespaced: true,
  state: {
    rainIntensity: 0,
    temperatureMin: 0,
    temperatureMax: 0,
    windSpeed: 0,
    hasBeenSet: false
  },
  mutations: {
    SET_PREFERENCES (state, preferences) {
      Object.keys(preferences).forEach(key => {
        state[key] = preferences[key]
      })
      state.hasBeenSet = true
    }
  },
  actions: {
    setPreferences ({ commit }, preferences) {
      const { rainIntensity, temperatureMin, temperatureMax, windSpeed } = preferences

      commit(SET_PREFERENCES, {
        rainIntensity,
        temperatureMin,
        temperatureMax,
        windSpeed
      })
    }
  },
  getters: {

  }
}
