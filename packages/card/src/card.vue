<template>
  <div class="j-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
      <div class="j-card__header" v-if="$slots.header || header">
          <slot name="header">{{header}}</slot>
      </div>
      <div class="j-card__body" :style="bodyStyle">
          <slot></slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'JCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>