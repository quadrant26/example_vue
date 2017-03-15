<template>
  <div id="app">
    <NavView v-show="headerShow"></NavView>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
      <router-view></router-view>
    </transition>
    <FooterView v-show="true"></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue';
import FooterView from './components/Footer.vue'
import HomeView from './components/Home.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
  computed:mapGetters([
    'headerShow'
  ]),
  watch : {
    $route(to, from){
      console.log(to.path);
      if(to.path == '/user-info'){
        this.$store.dispatch('hideHeader')
      }else{
        this.$store.dispatch('showHeader')
      }
    }
  },
  components : {
    NavView,
    HomeView,
    FooterView
  },
  mounted(){

  },
  methods(){

  }
}
</script>

<style>
  @import './assets/css/index.css';
  @import './assets/css/animate.css';
</style>
