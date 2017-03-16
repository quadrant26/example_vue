import getters from './getters.js'

const state = {
    header: true,
    laoding: false,
    footer:true
}

const mutations = {
    showHeader(state) {
        state.header = true
    },
    hideHeader(state) {
        state.header = false
    },
    showLoading(state) {
        state.loading = true
    },
    hideLoading(state) {
        state.loading = false
    },
    showFooter(state){
        state.footer = true
    },
    hideFooter(state){
        state.footer = false
    }
}

export default {
    state,
    mutations,
    getters
}