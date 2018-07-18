<template>
  <div class="flex flex-col align-center">
    <svg-icon :name="icon"></svg-icon>
    <h2 class="text-center is-light" :class="{ 'is-error': danger }">{{info}}</h2>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  components: {
    SvgIcon
  },
  props: {
    icon: String,
    info: String,
    danger: Boolean
  }
}
</script>
