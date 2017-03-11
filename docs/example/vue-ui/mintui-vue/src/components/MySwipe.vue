<template>
	<div id="mybutton">
		{{msg}}
		<div class="empty_height"></div>
		
		<mt-swipe :auto="4000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>


		<mt-swipe :show-indicators="false">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>

		<mt-swipe @change="handleChange">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>

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
		handleChange(index){
			//alert(this.msg);
			console.log(index);
		}
	}
}

</script>

<style type="text/css">

.empty_height{ height:30px; }
.mint-swipe, .mint-swipe-items-wrap{ height:50px; }

</style>
