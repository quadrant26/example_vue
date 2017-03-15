import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Store from './store/index.js'
import RouterConfig from './router.config.js'

import axios from 'axios'
import Loading from './components/loading/index.js'

Vue.use(VueRouter);
Vue.use(Loading);

// axios 配置
axios.interceptors.request.use(function(config) {
    // 配置 请求信息
    Store.dispatch('showLoading')
    return config;
}, function(error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function(response) {
    Store.dispatch('hideLoading')
    return response;
}, function(error) {
    return Promise.reject(error);
})


const router = new VueRouter({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: RouterConfig
})

require("./assets/css/base.css")

new Vue({
    router: router,
    el: '#app',
    store: Store,
    render: h => h(App)
})