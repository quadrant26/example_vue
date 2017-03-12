<template>
    <div id="news">
        我是新闻页
        <ul>
            <li>
                <router-link to="/detail/1" @click="push">新闻1</router-link>
            </li>
            <li>
                <router-link to="/detail/2" @click="replace">新闻2</router-link>
            </li>
            <li>
                <router-link to="/detail/3">新闻3</router-link>
            </li>
        </ul>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name : 'news',
    methods : {
        push(){
            // router.push({path:'home'});
            console.log("push");
        },
        replace(){
            console.log("replace");
        }
    }
}
</script>

<style lang="">
    ul,li{ list-style:none;}
</style>