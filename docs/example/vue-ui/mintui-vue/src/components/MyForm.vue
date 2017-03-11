<template>
	<div id="mybutton">
		{{msg}}
		<div class="empty_height"></div>
		
		<mt-cell title="标题文字">
			<mt-radio
			  title="单选框列表"
			  v-model="value"
			  :options="['选项A', '选项B', '选项C']">
			</mt-radio>
		</mt-cell>

	</div>
</template>

<script>

export default{
	data(){
		return {
			"msg" : "mt-button",
			options : [
			  {
			    label: '被禁用',
			    value: '值F',
			    disabled: true
			  },
			  {
			    label: '选项A',
			    value: '值A'
			  },
			  {
			    label: '选项B',
			    value: '值B'
			  }
			]
		}
	},
	methods :{
		handleClick(){
			alert(this.msg);
		}
	}
}

</script>

<style type="text/css">

.empty_height{ height:30px; }

</style>
