import Col from './src/col'

Col.install = function(Vue) {
  Vue.component(Col.name, Col)
}

export default Col