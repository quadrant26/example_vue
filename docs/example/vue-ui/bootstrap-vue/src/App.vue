<template>
  <div id="app">
    <p>{{msg}}</p>

    <button class="btn btn-default">默认按钮</button>
    <button class="btn btn-primary">普通按钮</button>
    <button class="btn btn-info">信息按钮</button>
    <button class="btn btn-danger">警告按钮</button>

    <div class="row">
      <div class="col-sm-4 my-border"></div>
      <div class="col-sm-8 my-border"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app{
  margin:50px auto; width:1000px;
}
.my-border{ border:1px solid #232323; padding:20px 0;
  margin-top:20px; }
</style>
