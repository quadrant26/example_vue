<template>
    <div class="content mt40">
        <ul>
            <li v-for="(item, index) in arrlist" class="followli">
                <router-link to="/article">
                    <h2>{{item.title}}</h2>
                    <p>{{item.detail}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                arrlist : []
            }
        },
        mounted(){
            this.getFollow();
        },
        methods : {
            getFollow(){
                var _this = this;
                this.$http.get("src/data/follow.data").then(function(res){
                    //console.log(res.data);
                    _this.arrlist = res.data;
                }).catch(function(err){
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>
    .mt40{ margin-top:40px;}
    .followli{ padding:5px 10px}
</style>