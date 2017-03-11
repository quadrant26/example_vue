<template>
    <strong>
        {{$route.params | json}}
        <br />
        {{$route.query | json}}
    </strong>
</template>

<style scope>
    .box{
        border:1px dashed #000;
    }
</style>