import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
