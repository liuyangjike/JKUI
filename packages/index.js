/*
* @author jike
* Date: 18/7/27
*/
import JButton from './button/index'
import JCol from './col/index'
import JRow from './row/index'
import JTag from './tag/index'
import Message from './message/index'
import Vue from 'vue'
const components = [
  JButton,
  JCol,
  JRow,
  JTag
]


const install = function(Vue) {
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message
  Vue.prototype.$zIndex = 2000
}


export default {
  install
}