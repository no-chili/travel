import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//配置代理
// Vue.prototype.HOST = '/api';

// ui组件
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


// 引入全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

// 使用ui框架
Vue.use(ViewUI);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
