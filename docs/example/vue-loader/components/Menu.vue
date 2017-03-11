<template>
    <ul>
        <li>111111</li>
        <li>222222</li>
        <li>333333</li>
        <li>444444</li>
    </ul>
    <ul>
        <li v-for="val in list">{{val}}</li>
    </ul>
</template>

<script>
    export default{
        data(){
            return {
                list : ['apple', 'orange', 'banana']
            }
        }
    }
</script>