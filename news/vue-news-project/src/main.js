import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//import Store from './store/store'
//import RouterConfig from './router.config.js'
import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'

Vue.use(VueRouter);

const routes = [{
    path : '/home', component: Home,
    path : '/follow', component: Follow,
    path : '/column', component: Column,
    path : '/user-info', component : UserInfo
}]

const router = new VueRouter({
  routes:routes
})

require("./assets/css/base.css")

new Vue({
  router : router,
  el: '#app',
  render: h => h(App)
})
