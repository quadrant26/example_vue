<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    
    <ul>
      <li>
        <router-link to="/home">主页</router-link>
        <router-link to="/news">新闻</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  font-size:20px; color:#f30;
}
</style>
