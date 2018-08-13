import JBreadcrumb from './src/breadcrumb.vue'

JBreadcrumb.install = function(Vue) {
  Vue.component(JBreadcrumb.name, JBreadcrumb)
}

export default JBreadcrumb