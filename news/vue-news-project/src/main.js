import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//import Store from './store/store'
import RouterConfig from './router.config.js'

Vue.use(VueRouter);


const router = new VueRouter({
  mode:"history",
  routes:RouterConfig
})

require("./assets/css/base.css")

new Vue({
  router : router,
  el: '#app',
  render: h => h(App)
})
