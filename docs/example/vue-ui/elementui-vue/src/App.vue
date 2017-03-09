<template>
	<div id="app">

		<el-button type="primary" @click="get">普通按妞</el-button>

		<br>
		<br>
		<p>{{myMessage}}</p>
		<br>

		<Button></Button>

		<Tabs></Tabs>
		
		<Layout></Layout>
		
		<Form></Form>

		<Date></Date>
	</div>
</template>

<script>
	import Button from './components/Button.vue'
	import Layout from './components/Layout.vue'
	import Form from './components/Form.vue'
	import Date from './components/Date.vue'
	import Tabs from './components/Tabs.vue'
	import axios from 'axios'

	export default{
		name : 'app',
		data(){
			return {
				myMessage : '默认数据'
			}
		},
		components : {
			//Layout
			Button : Button,
			Tabs : Tabs,
			Layout : Layout,
			Form : Form,
			Date : Date
			//Layout
			//Button
		},
		methods : {
			get(){
				axios.get('https://api.github.com/users/itstrive').then(function (res){
					this.myMessage = res.data;
				}.bind(this)).catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

</style>
