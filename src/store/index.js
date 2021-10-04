//景区相关配置
// const senery={
// }

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

let state = {
    ceneryName: ''
}

let getters = {
    getName(state) {
        return state.ceneryName
    }
}

let actions = {
    setCeneryName(context, value) {
        context.commit('setCeneryName', value)
    }
}

let mutations = {
    setCeneryName(state, value) {
        state.ceneryName = value
    }
}

// 创建 store 对象
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

// 导出 store 对象
export default store;
