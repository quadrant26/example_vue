import getters from './getters.js'

const state = {
    header : true
}

const mutations = {
    showHeader(state){
        state.header = true
    },
    hideHeader(state){
        state.header = false
    }
}

export default{
    state,
    mutations,
    getters
}