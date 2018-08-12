<template>
  <transition name="j-message-fade">
    <div
      :class="[
        'j-message',
        type && !iconClass ? `j-message--${ type }` : '',
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        customClass
      ]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert">
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="j-message__content">{{ message }}</p>
        <p v-else v-html="message" class="j-message__content"></p>
      </slot>
      <i v-if="showClose" class="j-message__closeBtn j-icon-close2" @click="close"></i>
    </div>
  </transition>
</template>

<script>
  const typeMap = {
    success: 'plane',
    info: 'message',
    warning: 'remindfill',
    error: 'closefill'
  }
  export default {
    data () {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        dangerouslyUseHTMLString: false,
        closed: false,
        timerL: null,
        center: false
      }
    },
    computed: {
      typeClass() {
        console.log('wwww')
        return this.type && !this.iconClass
          ? `j-message__icon j-icon-${ typeMap[this.type]}`
          : ''
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false
          console.log(this.visible, 'vis')
          this.$el.addEventListener('transitioned', this.destroyElement)
        }
      }
    },

    methods: {
      destroyElement() {
        console.log(11)
        this.$el.removeEventListener('transitioned', this.destroyElement)
        this.$destroy(true)
        console.log(22)
        this.$el.parentNode.removeChild(this.$el)
      },
      
      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      
      clearTimer() {
        clearTimeout(this.timer)
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
            console.log('ee')
          }, this.duration)
        }
      },
      keydown(e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    }
  }
</script>