import getters from './getters.js'

const state = {
    header: true,
    laoding: false
}

const mutations = {
    showHeader(state) {
        state.header = true
    },
    hideHeader(state) {
        state.header = false
    },
    showLaoding(state) {
        state.loading = true
    },
    hideLoading(state) {
        state.loading = false
    }
}

export default {
    state,
    mutations,
    getters
}