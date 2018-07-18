export default {
  namespaced: true,
  getters: {
    backgroundColor (state, getters, rootState, rootGetters) {
      if (!rootState.error && rootGetters['weather/weatherIsNice']) {
        return '#44AF69'
      }
      return '#2B303A'
    }
  }
}
