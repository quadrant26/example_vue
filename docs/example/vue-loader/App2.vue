<template>
    <h1>Welcome Vue<h1>
    <h2 @click="change">{{msg}}</h2>
    <my-menu></my-menu>
</template>

<style>
    body{
        background-color:#ccc;
    }
</style>

<script>
    import Menu from './components/Menu.vue'

    export default{
        data(){
            return {
                msg : "welcome vue ^_^"
            }
        },
        methods : {
            change(){
                this.msg = "wahaha";
            }
        },
        components : {
            'my-menu' : Menu
        }
    }
</script>