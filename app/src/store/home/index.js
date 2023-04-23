import { reqCategoryList } from '@/api'


//home的小仓库
const state = {
    //state中数据默认初始值别瞎写，服务器返回对象写对象，服务器返回数组写数组。【根据接口返回值初始化的)
    categoryList:[]
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    }
}
const getters = {}

export default {

    state,
    mutations,
    actions,
    getters
}