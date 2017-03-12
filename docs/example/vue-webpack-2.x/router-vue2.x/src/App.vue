<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    
    <p>
      <router-link to="/home">主页</router-link>
      <router-link to="/news" @click="ale">新闻页</router-link>
    </p>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated zoomOutRight">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {
    ale(){
      alert(123);
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
