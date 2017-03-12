import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 1. 定义（路由）组件。 可以从其他文件 import 进来
const Home = {
    template: '<div>我是首页</div>'
}

const News = {
    template: '<div>我是新闻页</div>'
}

// 2. 定义路由
/**
每个路由应该映射一个组件。 其中"component" 可以是
通过 Vue.extend() 创建的组件构造器，
或者，只是一个组件配置对象。
 */
const routers = [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '*', redirect: '/home' }
]

// 3. 创建router 实例， 然后`routes` 配置
const router = new VueRouter({
    routes: routers // （缩写）相当于 routes: routes
})

// 4.  创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})