<template>
  <component :is="currentIcon"></component>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      currentIcon: require(`@/assets/${this.name}.svg`)
    }
  }
}
</script>

<style>

</style>
