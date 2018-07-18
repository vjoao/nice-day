<template>
  <div class="form-control">
    <h2 class="label is-light">{{ label }}:</h2>
    <input v-bind="$attrs" :value="value" @input="updateValue">
  </div>
</template>

<script>
export default {
  props: ['value', 'label'],
  methods: {
    updateValue ($ev) {
      this.$emit('input', $ev.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables';

  .label {
    margin-bottom: 0;
  }

  input {
    border: none;
    border-bottom: 2px solid $light;
    background: transparent;
    color: $light;
    outline: none;
    transition: all .3s ease;
    font-size: 1.5em;
    text-align: center;
    padding: 1em;
    flex: 1;
    &:focus {
      border-bottom-color: $primary;
    }
  }

  .form-control {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
