import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Mylog from '../components/Mylog'
import Scenery from '../components/Scenery'
import SceneryInfo from '../components/SceneryInfo'
import Password from '../components/Password'
import User from '../components/User'
import Setting from '../components/Setting'
import Message from '../components/Message'
import Help from '../components/Help'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/scenery',
        component: Scenery
    },
    {
        path: '/sceneryinfo',
        component: SceneryInfo
    },
    {
        path: '/mylog',
        component: Mylog,
        redirect: '/help',
        children: [{
            path: '/password',
            component: Password
        }, {
            path: '/user',
            component: User
        }, {
            path: '/setting',
            component: Setting
        }, {
            path: '/message',
            component: Message
        }, {
            path: '/help',
            component: Help
        }]
    }
]

const router = new VueRouter({
    routes
})


// 挂载路由守卫
router.beforeEach((to, from, next) => {
    if (to.path == '/login') return next()
    if (to.path == '/home') return next()
    if (to.path == '/') return next()
    let tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})
export default router
