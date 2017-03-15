<template>
    <div class="content">
        <BannerView></BannerView>
        <div class="newsList">
	    	<ul>
                <li v-for="(item, index) in arrList">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BannerView from './Banner.vue'

    export default{
        components :{
            BannerView
        },
        data(){
            return {
                arrList : ["apple", "orange", "banana", "juice"]
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/index.css'
</style>