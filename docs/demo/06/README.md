Vue2.0

1. 过滤器



2. 动画

    <transition name="fade">
        运动东西( 元素，属性，路由)
    </transition>

        class 定义

            fade-enter{}            // 初始状态

            fade-enter-active{}     // 当元素出来（显示）

            fade-leave              //

            fade-leave-active       // 当元素（隐藏）

            @before-enter/enter/after-enter/before-leave/leave/after-leave

    animation

        <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
            <p v-show="" class="animated"></p>
        </transition>

    说个元素运动

        <transition-group enter-active-class="" leave-active-class="">
            <p :key="id"></p>
        </transition-group>


3. 路由

    1.0

        <a v-link="/home">主页</a>

        重定向

               router.rediect   // 已经废弃

    vue-router-2.0.1.js

         1. <div><router-link to="/home">主页</router-link></div>

         2. Home = {template : ''}

         3. const routes = [{path : "/home", component : Home}]

         4. const router  = new VueRouter({ routes })

         5. new Vue({router, el : "element"})

            重定向 { path : "*", redirect : '/home'}

    子路有

        var routes = [{
            path:'/user',
            component:User,
            children : [
                {path:'username', component:UserDetail}
            ]
        }]


    路由实例的方法

        new Vue

        router.push({path:'home'})      // 直接添加一个路由 表现为切换路由， 往历史记录里面添加一条记录

        router.replace({path:'news'})   // 不会往历史记录添加


4. vue-cli

    1.0
        new Vue({
            el : "#app"
            components : App
        })

    2.0

        new Vue({
            el : "#app",
            render:h => h(App)
        })


























