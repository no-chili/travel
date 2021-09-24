import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Mylog from '../components/Mylog'
import Scenery from '../components/Scenery'
import SceneryInfo from '../components/SceneryInfo'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/mylog', component: Mylog },
    { path: '/scenery', component: Scenery },
    { path: '/sceneryinfo', component: SceneryInfo }
]

const router = new VueRouter({
    routes
})

export default router
