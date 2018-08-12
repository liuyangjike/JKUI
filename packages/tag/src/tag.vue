<template>
  <transition name="j-zoom-in-center">
    <div  class="j__tag" :class="'j__tag--'+color">
      <span class="j__tag--desc"><slot></slot></span>
      <i class="j-icon-close2 j__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'JTag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }

</script>