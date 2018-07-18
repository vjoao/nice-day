import {inRange} from '@/util'
import {SET_ERROR, UPDATE_WEATHER} from '../mutationTypes'
import forecast from '@/services/forecast'

export default {
  namespaced: true,
  state: {
    conditions: {
      rainIntensity: 0,
      temperature: 0,
      windSpeed: 0
    }
  },
  mutations: {
    [UPDATE_WEATHER] (state, { windSpeed, precipIntensity, apparentTemperature }) {
      state.conditions = {
        windSpeed,
        rainIntensity: precipIntensity,
        temperature: apparentTemperature
      }
    }
  },
  actions: {
    fetchWeather ({ commit, rootState }) {
      if (!rootState.preferences.hasBeenSet) {
        commit(SET_ERROR, 'Please tell me your preferences of a nice weather!', { root: true })
        return
      }

      return forecast.get(rootState.user.position)
        .then(response => response.data)
        .then(forecastInformation => {
          commit(SET_ERROR, null, { root: true })
          commit(UPDATE_WEATHER, forecastInformation)
          return forecastInformation
        })
        .catch(error => {
          commit(SET_ERROR, error.message, { root: true })
        })
    }
  },
  getters: {
    weatherIsNice ({conditions: {rainIntensity, temperature, windSpeed}}, getters, rootState) {
      const { temperatureMin, temperatureMax } = rootState.preferences

      const rainIsGood = rainIntensity <= rootState.preferences.rainIntensity
      const temperatureIsGood = inRange(temperature, temperatureMin, temperatureMax)
      const windIsGood = windSpeed <= rootState.preferences.windSpeed

      return windIsGood && rainIsGood && temperatureIsGood
    }
  }
}
