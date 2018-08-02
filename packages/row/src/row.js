export default {
  name: 'JRow',
  componentName: 'JRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style() {
      var ret = {}
      if (this.gutter) {
        ret.paddingLeft = `-${this.gutter / 2}px`
        ret.paddingRgiht = ret.paddingLeft
      }
      return ret
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'j-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}`: '',
        {
          'j-row--flex': this.type === 'flex'
        }
      ],
      style: this.style,
    }, this.$slots.default)
  }

}