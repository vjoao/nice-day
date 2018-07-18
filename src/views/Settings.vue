<template>
<div class="settings">
  <nav class="nav">
    <router-link class="is-light is-big" to="/">X</router-link>
  </nav>
  <main class="flex flex-col align-center">
    <section class="container flex flex-col align-center">
      <div class="grid">
        <base-input label="Wind speed max (m/s)" placeholder="Type here" type="number" v-model.number="windSpeed"></base-input>
        <base-input label="Rain intensity max (mm/h)" placeholder="Type here" type="number" v-model.number="rainIntensity"></base-input>
      </div>
      <div class="grid">
        <base-input label="Temperature min (°C)" placeholder="Type here" type="number" v-model.number="temperatureMin"></base-input>
        <base-input label="Temperature max (°C)" placeholder="Type here" type="number" v-model.number="temperatureMax"></base-input>
      </div>
      <button @click="save" class="save-button">
        save
      </button>
    </section>
  </main>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('preferences')

export default {
  data () {
    return {
      rainIntensity: 0,
      temperatureMin: 0,
      temperatureMax: 0,
      windSpeed: 0
    }
  },
  mounted () {
    // probably there is a much better way of doing this
    // vuex-forms lib is an option
    // two-way computed properties as well.
    this.rainIntensity = this.rain
    this.temperatureMin = this.tempMin
    this.temperatureMax = this.tempMax
    this.windSpeed = this.wind
  },
  computed: {
    ...mapState({
      rain: state => state.rainIntensity,
      tempMin: state => state.temperatureMin,
      tempMax: state => state.temperatureMax,
      wind: state => state.windSpeed
    })
  },
  methods: {
    ...mapActions([
      'setPreferences'
    ]),
    save () {
      const { rainIntensity, temperatureMin, temperatureMax, windSpeed } = this
      this.setPreferences({
        rainIntensity,
        temperatureMin,
        temperatureMax,
        windSpeed
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables';

  .nav {
    display: flex;
    justify-content: flex-end;
    padding: 2em;
    flex: 1;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 6em;
  }

  .save-button {
    cursor: pointer;
    margin: 3em;
    font-size: 3em;
    border: none;
    outline: none;
    &:hover {
      background-color: $muted;
    }
    &:active {
      background-color: $primary;
    }
  }
</style>
