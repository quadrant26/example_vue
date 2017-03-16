<template>
    <div class="content">
        <BannerView></BannerView>
        <div class="newsList">
	    	<ul>
                <li v-for="(item, index) in arrList">
                    <router-link :to="'/article/'+item.id">
                        <h2>{{index+1}} {{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
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
                arrList : []
            }
        },
        mounted(){
            // 获取数据
            this.getIndex();                 
        },
        methods : {
            getIndex(){
                var _This = this;
                this.$http.get("src/data/index.data").then(function (res){
                    //console.log(res.data);      
                    _This.arrList = res.data
                }).catch(function (err){
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/index.css'
</style>