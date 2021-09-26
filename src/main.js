import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// ui组件
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// 高德地图
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
// 初始化高德地图的 key 和插件
VueAMap.initAMapApiLoader({
    key: '0a125e10974f3f7832802dbb904b29c1',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4'
});



// 引入全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

// 使用ui框架
Vue.use(ViewUI);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
