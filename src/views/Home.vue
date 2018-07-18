<template>
  <div class="home">
    <nav class="nav">
      <a href="#" @click.prevent="refresh()">Refresh</a>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <main class="content text-center">
      <h1 class="is-light text-center">Hello there!</h1>
      <div class="location is-light">
        <h3> {{ position.address }} </h3>
      </div>
      <h2 class="is-light text-center" v-if="!loading" :class="{ 'is-error': error }">{{ weatherMessage }}</h2>
      <info-grid v-if="!error && !loading" :conditions="weatherConditions"></info-grid>
      <the-loader v-if="loading"></the-loader>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import InfoGrid from '@/components/InfoGrid'

export default {
  components: {
    InfoGrid
  },
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.loading = true

    this.requestPosition()
      .then(this.refresh)
      .catch(_ => {
        this.loading = false
      })
  },
  computed: {
    ...mapState({
      error: state => state.error,
      weatherConditions: state => state.weather.conditions,
      position: state => state.user.position
    }),
    ...mapGetters({
      weatherIsNice: 'weather/weatherIsNice'
    }),
    weatherMessage () {
      const theWeatherIs = 'The weather is '

      if (this.error) {
        return this.error
      } else if (this.weatherIsNice) {
        return `${theWeatherIs} good today! :)`
      } else {
        return `${theWeatherIs} not so good :(`
      }
    }
  },
  methods: {
    ...mapActions({
      fetchWeather: 'weather/fetchWeather',
      requestPosition: 'user/requestPosition'
    }),
    refresh () {
      this.loading = true
      return this.fetchWeather().then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  .nav {
    display: flex;
    justify-content: flex-end;
    padding: 2em;

    a {
      margin-right: 1em;
    }
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
