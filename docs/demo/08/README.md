1. 自定义全局组件
	
	|-- loading

		|-- index.js
		|-- Loading.vue

	index.js

		import ComponentLoading from './;Loading.vue'
		const Loading = {
			install : function (Vue){
				Vue.component('Loading', ComponentLoading)
			}
		}
		export default Loading

	mian.js

		import Loading from './components/loading'
		Vue.use(Loading)