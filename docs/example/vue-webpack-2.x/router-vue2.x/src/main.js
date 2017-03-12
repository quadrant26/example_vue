import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RouterConfig from './router.config.js'

import './assets/css/animate.css'

Vue.use(VueRouter)

const router = new VueRouter(RouterConfig)

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})