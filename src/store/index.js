import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'
import { preferences, ui, user, weather } from './modules'
import { SET_ERROR } from './mutationTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: ''
  },
  mutations: {
    [SET_ERROR] (state, error) {
      state.error = error
    }
  },
  modules: {
    preferences,
    ui,
    user,
    weather
  },
  plugins: [createPersistedState({
    paths: ['preferences', 'user']
  })]
})
