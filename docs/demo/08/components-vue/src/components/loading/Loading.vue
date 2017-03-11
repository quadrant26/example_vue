<template>
	<div id="loading">
		<p>{{loading}}</p>
		<br>
		<div class="loading">
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
		</div>
		
		<br>
		<br>
		<div class="loadEffect">
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
	        <span></span>
		</div>
	</div>
		
</template>

<script>
	export default{
		data(){
			return {
				loading : "Loading ..."
			}
		}
	}
</script>

<style type="text/css">
#loading{
width:1000px; margin:50px auto; color:#f00;
}

.loading{
    width: 80px;
    height: 40px;
    margin: 0 auto;
    margin-top:100px;
}
.loading span{
    display: inline-block;
    width: 8px;
    height: 100%;
    border-radius: 4px;
    background: lightgreen;
    -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load{
    0%,100%{
        height: 40px;
        background: lightgreen;
    }
    50%{
        height: 70px;
        margin: -15px 0;
        background: lightblue;
    }
}
.loading span:nth-child(2){
    -webkit-animation-delay:0.2s;
}
.loading span:nth-child(3){
    -webkit-animation-delay:0.4s;
}
.loading span:nth-child(4){
    -webkit-animation-delay:0.6s;
}
.loading span:nth-child(5){
    -webkit-animation-delay:0.8s;
}

/* two laoding */
.loadEffect{
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
    margin-top:100px;
}
.loadEffect span{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: lightgreen;
    position: absolute;
    -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load{
    0%{
        -webkit-transform: scale(1.2);
        opacity: 1;
    }
    100%{
        -webkit-transform: scale(.3);
        opacity: 0.5;
    }
}
.loadEffect span:nth-child(1){
    left: 0;
    top: 50%;
    margin-top:-10px;
    -webkit-animation-delay:0.13s;
}
.loadEffect span:nth-child(2){
    left: 14px;
    top: 14px;
    -webkit-animation-delay:0.26s;
}
.loadEffect span:nth-child(3){
    left: 50%;
    top: 0;
    margin-left: -10px;
    -webkit-animation-delay:0.39s;
}
.loadEffect span:nth-child(4){
    top: 14px;
    right:14px;
    -webkit-animation-delay:0.52s;
}
.loadEffect span:nth-child(5){
    right: 0;
    top: 50%;
    margin-top:-10px;
    -webkit-animation-delay:0.65s;
}
.loadEffect span:nth-child(6){
    right: 14px;
    bottom:14px;
    -webkit-animation-delay:0.78s;
}
.loadEffect span:nth-child(7){
    bottom: 0;
    left: 50%;
    margin-left: -10px;
    -webkit-animation-delay:0.91s;
}
.loadEffect span:nth-child(8){
    bottom: 14px;
    left: 14px;
    -webkit-animation-delay:1.04s;
}
</style>