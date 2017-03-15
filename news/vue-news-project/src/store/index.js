import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

console.log(mutations.getters);

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});