import Home from './components/Home.vue'
import News from './components/News.vue'
import Detail from './components/Detail.vue'

export default {
    routes: [
        { path: '/home', component: Home },
        {
            path: '/news',
            component: News,
            children: [
                { path: '/detail/:id', component: Detail }
            ]
        },
        { path: '*', redirect: '/home' }
    ]
}