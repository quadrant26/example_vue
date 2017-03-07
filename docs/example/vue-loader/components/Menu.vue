<template>
    <ul>
        <li></li>
    </ul>
</template>

<style>
    body{
        background-color:#ccc;
    }
</style>

<script>
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
        }
    }
</script>