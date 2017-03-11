// 专门配置理由规则

// 引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
import Detail from './components/Detail.vue'

export default {
    '/home' : {
        components : Home,
        subRoutes : {
            'login' : {
                components : Login
            },
            'reg' : {
                components : Reg
            }
        }
    },
    '/news' : {
        components : News,
        subRoutes: {
            'detail/:id' : Detail
        }
    }
}