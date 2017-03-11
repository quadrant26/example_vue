<template>
  <div id="app">
    <div class="empty_height"></div>
    <MyButton></MyButton>

    <div class="empty_height"></div>
    <!-- <MyForm></MyForm> -->
    
    <div class="empty_height"></div>
    <MySwipe></MySwipe>
  </div>
</template>

<script>

import MyButton from './components/MyButton.vue'
import MyForm from './components/MyForm.vue'
import MySwipe from './components/MySwipe.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    MyButton : MyButton,
    //yForm : MyForm,
    MySwipe : MySwipe
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

.empty_height{ height:30px; }

</style>
