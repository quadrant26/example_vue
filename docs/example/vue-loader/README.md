目录

    | - index.html

    | - main.js                 入口文件

    | - App.vue                 vue 文件

    | - package.json            工程(依赖, 名称, 配置)

        npm init --yes

    | - webpack.config.js       webpack 配置文件

        webpack webpack-dev-servers

        vue-loader@8.5.4

        vue-html-laoder css-loader vue-style-laoder vue-hot-reload-api@1.3.2

        babel-laoder babel-core babel-plugin-tranform-runtime babel-presets-es2015 babel-runtime

        vue@1.0.28

路由

    vue-router

        bower info vue-router -> 0.7.13

    import VueRouter from 'vue-router';

    Vue.use(VueRouter)

打包

    "build" : "webpack -p"