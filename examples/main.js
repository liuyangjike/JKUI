// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import demoBlock from './components/demo-block.vue'
import router from './router'
import JKUI from '../packages/index'
import '../packages/theme-default/lib/index.css'

Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false
Vue.use(JKUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
