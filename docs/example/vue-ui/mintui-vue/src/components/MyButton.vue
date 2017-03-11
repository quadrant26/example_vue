<template>
	<div id="mybutton">
		{{msg}}
		<div class="empty_height"></div>

		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
		
		<div class="empty_height"></div>
		<mt-button size="small">small</mt-button>
		<mt-button size="large">large</mt-button>
		<mt-button size="normal">normal</mt-button>

		<div class="empty_height"></div>
		<mt-button disabled>disabled</mt-button>

		<div class="empty_height"></div>
		<mt-button plain>plain</mt-button>

		<div class="empty_height"></div>
		<mt-button icon="back">back</mt-button>
		<mt-button icon="more">更多</mt-button>

		<div class="empty_height"></div>
		<mt-button @click.native="handleClick">点击触发 handleClick</mt-button>

	</div>
</template>

<script>

export default{
	data(){
		return {
			"msg" : "mt-button"
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
