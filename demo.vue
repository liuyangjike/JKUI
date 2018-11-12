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
    name: 'hourglass',
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
          backgroundColor: this.sandColor
        }
      }
    }
  }
</script>

<style scoped>
.hour-container{
  width: 60px;
  height: 120px;
  position: relative;
  background-color: #D7CED0;
  opacity: 0.9;
  border-radius: 2px;
  animation: hour-rotate 4s ease-in-out infinite;
  display: inline-block;
}

.upper-tap{
  width: 100%;
  height: 6px;
  background-color: grey;
  border-radius: 2px;
}

 .middle-tap{
  width: 100%;
  height: 108px;
}

.bottom-tap{
  width: 100%;
  height: 6px;
  background-color: grey;
  border-radius: 2px;
}

.upper-half-container{
   width: 100%;
   height: 50%;
   overflow: hidden;
   position: relative;
 }
 .lower-half-container{
   width: 100%;
   height: 50%;
   position: relative;
   overflow: hidden;
 }
 .upper-half-content{
   position: absolute;
   border: 3px solid rgb(248, 248, 250);
   border-radius: 50%;
   height: 105px;
   width: 50px;
   top: -53px;
   left: 2px;
   box-shadow: 2px 1px 3px 0px #aaa;
 }

 .lower-half-content{
   position: absolute;
   border: 3px solid rgb(243, 243, 250);
   border-radius: 50%;
   height: 105px;
   width: 50px;
   top: -2px;
   left: 2px;
   box-shadow: 2px 1px 3px 0px #aaa;
 }

 .upper-sand{
   width: 100%;
   height: 100%;
   background-color: #409EFF;
   position: absolute;
   border-radius: 50%;
   top: 0px;
   overflow: hidden;
 }

 .lower-sand{
  width: 100%;
  height: 100%;
   background-color: #409EFF;
   position: absolute;
   border-radius: 50%;
   top: 0px;
   overflow: hidden;
 }

 .sand-reduce{
   height: 60%;
   width: 100%;
   background-color: #fff;
   animation: sand-reduce 4s linear infinite;
 }
 .sand-add{
   height: 50%;
   width: 100%;
   background-color: #fff;
   animation: sand-add 4s linear infinite;
 }
 .sand-falling{
   position: absolute;
   background-color: #409EFF;
   width: 5px;
   height: 0%;
   top: 50%;
   left: 50%;
   box-sizing: border-box;
   border-radius: 40%;
   border: 1px sold #fff;
   animation: sand-falling 4s linear infinite;
   overflow: hidden;
 }
 .sand-null{
   width: 100%;
   height: 0;
   background-color: #fff;
   border: 1px sold #fff;
   animation: sand-null 4s linear infinite;
 }


 @keyframes sand-add{
   0%{
     height: 53%;
   }
   12.5%{
     height: 51%;
   }
   75%{
     height: 36%;
   }
   100%{
     height: 36%;
   }
 }
 @keyframes sand-reduce{
   0%{
     height: 65%;
   }
   25%{
     height: 78%;
   }
   40%{
     height: 89%;
   }
   62.5%{
     height: 100%;
   }
   80%{
     height: 100%;
   }
   100%{
     height: 100%;
   }
 }
 @keyframes sand-falling {
   0%{
     height: 0%;
   }
   12.5%{
     height: 45%;
   }
   62.5%{
     height: 45%;
     opacity: 1.0;
   }
   100%{
     height: 45%;
     opacity: 0.2;
   }
 }
 @keyframes sand-null{
   0%{
     height: 0%;
   }
   62.5%{
     height: 0%;
   }
   75%{
     height: 71.7%;
   }
   100%{
     height: 71.7%;
   }
 }

 @keyframes hour-rotate{
   0%{
     transform: rotate(0)
   }
   75%{
     transform: rotate(0deg)
   }
   100%{
     transform: rotate(720deg)
   }
 }

 .hour-container-small{
  width: 40px;
  height: 80px;
  position: relative;
  background-color: #D7CED0;
  opacity: 0.9;
  overflow: hidden;
  border-radius: 2px;
  animation: hour-rotate 4s ease-in-out infinite;
  display: inline-block;
}

  .upper-tap-small{
  width: 100%;
  height: 4px;
  background-color: grey;
  border-radius: 2px;
}
.middle-tap-small{
  width: 100%;
  height: 72px;
}

  .upper-half-content-small{
   position: absolute;
   border: 1px solid rgb(248, 248, 250);
   border-radius: 50%;
   height: 72px;
   width: 32px;
   top: -36px;
   left: 3px;
   box-shadow: 1px 1px 3px 0px #aaa;
 }

  .bottom-tap-small{
  width: 100%;
  height: 4px;
  background-color: grey;
  border-radius: 2px;
}

 .lower-half-content-small{
   position: absolute;
   border: 1px solid rgb(243, 243, 250);
   border-radius: 50%;
   height: 72px;
   width: 32px;
   top: -2px;
   left: 3px;
   box-shadow: 2px 1px 3px 0px #aaa;
 }

  .upper-sand-small{
   width: 100%;
   height: 100%;
   background-color: #409EFF;
   position: absolute;
   border-radius: 50%;
   top: 0px;
   overflow: hidden;
 }

 .lower-sand-small{
  width: 100%;
  height: 100%;
   background-color: #409EFF;
   position: absolute;
   border-radius: 50%;
   top: 0px;
   overflow: hidden;
 }

 .sand-null-small{
   width: 100%;
   height: 0;
   background-color: #fff;
   animation: sand-null-small 4s linear infinite;
 }
 @keyframes sand-null-small{
   0%{
     height: 0%;
   }
   62.5%{
     height: 0%;
   }
   75%{
     height: 69%;
   }
   100%{
     height: 69%;
   }
 }
</style>
