<template>
  <div id="app" class="wrapper" :style="{ backgroundColor }">
    <transition name="slide-fade">
      <router-view class="expanded"/>
    </transition>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('ui')

export default {
  computed: {
    ...mapGetters([
      'backgroundColor'
    ])
  }
}
</script>

<style lang="scss">
@import './styles/global';
@import './styles/transitions';

.wrapper {
  transition: 0.3s
}

.expanded {
  width: 100vw;
  height: 100vh;
}
</style>
