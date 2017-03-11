/**
 * Created by Wang on 2017/2/27.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routerConfig from './router.config'

Vue.use(VueRouter);

// 配置路由
/*const router = new VueRouter();

router.map({
    'home' : {
        compontens : Home
    },
    'news' : {
        compontens : News
    }
})*/

const router = new VueRouter();

router.map(routerConfig);

router.redirect({
    '/' : '/home'
})

router.start(App, "#App")

/*
new Vue({
    el : 'body',
    component : {
        app : App
    }
})*/
