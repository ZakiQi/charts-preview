import Vue from 'vue'
import App from './App.vue'

import previewUI from './index'
Vue.use(previewUI)

new Vue({
  el: '#app',
  render: h => h(App)
})