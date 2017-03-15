# vue-news-project

> A demo for vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


1. 安装模块

    axios babel-core babel-loader babel-preset-latest cross-env css-loader file-loader style-loader vue-loader vue-router vue-template-compiler vuex webpack webpack-dev-server

2. 目录结构

    - src

        -- assets  // 静态资源

        -- components  // 所有的组件

        -- App.vue

        -- main.js
    
    - index.html

    - package.json

    - webpack.config.js

3. Loading

    在加载 loading 的时候 loading 都需要在重头开始加载
    
        new VueRouter({
            ..
            scrollBehavior: () => ({ y: 0 }),
            ..
        })
        

4. axios

    // 发送请求
        axios.interceptors.request.use(function(config) {
            return config;
        }, function(error) {
            return Promise.reject(error)
        })

    // 接收请求
        axios.interceptors.response.use(function(response) {
            return response;
        }, function(error) {
            return Promise.reject(error);
        })

    // 请求的跟路径
        axios.defaults.baseURL = "localhost:port"

    // 其他页面在使用 axios 的时候直接 this.$http 就可以了
        Vue.prototype.$http = axios

    // 设置post头部 信息
        axios.dafaults.headers/post['Content-Type]' = application/x-www-form-urlencodeed';