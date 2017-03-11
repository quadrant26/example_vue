<template>
    <div id="App">
        <h3>Vue-loader + vue-router</h3>
        <div>
            <a v-link="{path:'/home'}">主页</a>
            <a v-link="{path:'/news'}">新闻</a>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
    body{
        background-color:#ccc;
    }
    .v-link-active{
        font-size: 20px;
        color:#f79;
    }
</style>

<script>

</script>