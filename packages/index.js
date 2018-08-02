/*
* @author jike
* Date: 18/7/27
*/
import JButton from './button/index'
import JCol from './col/index'
import JRow from './row/index'
const components = [
  JButton,
  JCol,
  JRow
]
const install = function(Vue) {
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
}


export default {
  install
}