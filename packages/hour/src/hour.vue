<template>
  <div :class="[this.size?'hour-container-small': 'hour-container']" :style="{backgroundColor: backColor}">
     <div :class="[this.size?'upper-tap-small': 'upper-tap']" :style='{backgroundColor:boardColor}'></div>
     <div :class="[this.size?'middle-tap-small': 'middle-tap']">
       <div class="upper-half-container">
         <div :class="[this.size?'upper-half-content-small':'upper-half-content']">
           <div :class="[this.size?'upper-sand-small':'upper-sand']" :style="{backgroundColor: sandColor}">
             <div class="sand-reduce"></div>
           </div>
         </div>
       </div>
       <div class="lower-half-container">
         <div :class="[this.size?'lower-half-content-small':'lower-half-content']">
            <div :class="[this.size?'lower-sand-small':'lower-sand']" :style="{backgroundColor: sandColor}">
             <div class="sand-add"></div>
           </div>
         </div>
       </div>
     </div>
     <div class="sand-falling" :style='sandWidth'>
       <div :class="[this.size?'sand-null-small':'sand-null']"></div>
     </div>
     <div class="bottom-tap" :style='{backgroundColor:boardColor}'></div>
  </div>
</template>

<script>
  export default {
    name: 'JHour',
    props: {
      size: {
        type: String,
        default: ''
      },
      sandColor: {
        type: String,
        default: '#409EFF'
      },
      backColor:{
        type: String,
        default: '#D7CED0'
      },
      boardColor: {
        type: String,
        default: 'grey'
      }
    },
    computed: {
      sandWidth () {
        return {
          width: this.size?'3px':'5px',
          backgroundColor: this.sandColor,
          transform: `translateX(${this.size?'-1.5px':'-2.5px'})`
        }
      }
    }
  }
</script>