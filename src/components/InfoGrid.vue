<template>
  <section class="grid">
    <icon-box icon="drizzle" :info="rainIntensityText"></icon-box>
    <icon-box icon="thermometer" :info="temperatureText"></icon-box>
    <icon-box icon="wind" :info="windSpeedText"></icon-box>
  </section>
</template>

<script>
import IconBox from '@/components/IconBox'

export default {
  components: {
    IconBox
  },
  props: {
    conditions: {
      type: Object,
      required: true
    }
  },
  computed: {
    temperatureText () {
      return `Current temperature: ${this.conditions.temperature}`
    },
    rainIntensityText () {
      return `Rain intensity: ${this.conditions.rainIntensity}`
    },
    windSpeedText () {
      return `Wind speed: ${this.conditions.windSpeed}`
    }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4em;
  }
</style>
