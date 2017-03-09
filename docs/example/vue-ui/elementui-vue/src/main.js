import Vue from 'vue'
import App from './App.vue'

//import './element-ui.js'
import 'element-ui/lib/theme-default/index.css'

import ElementUI from 'element-ui'
Vue.use(ElementUI);


new Vue({
  el: '#app',
  render: h => h(App)
})
