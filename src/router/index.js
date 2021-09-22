import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Mylog from '../components/Mylog'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/mylog', component: Mylog }
]

const router = new VueRouter({
    routes
})

export default router
