import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from "axios"

// import Vuex from 'vuex'
// import store from './store/index'

axios.defaults.headers = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${window.localStorage.getItem('token')}`
}
Vue.prototype.$http = axios

// ui组件
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// 引入全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

// 使用ui框架
Vue.use(ViewUI);
// 使用Vuex
// Vue.use(Vuex);
Vue.config.productionTip = false


new Vue({
    // store,
    router,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this; //安装全局事件总线
    }
}).$mount('#app')
