<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue';
import FooterView from './components/Footer.vue'
import HomeView from './components/Home.vue'

import {mapGetters, mapActions} from 'vuex'

export default {
  computed:mapGetters([
    'headerShow',
    'loading',
    'footerShow'
  ]),
  watch : {
    $route(to, from){
      var path = to.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    }
  },
  components : {
    NavView,
    HomeView,
    FooterView
  },
  mounted(){
    var path=this.$route.path.substring(1);
    this.headerChange(path);
    this.footerChange(path);
  },
  methods : {
    headerChange(path){
      if(path == "user-info" || path == "user-reg" || path == "user-login"){
        this.$store.dispatch('hideHeader')
      }else{
        this.$store.dispatch('showHeader')
      }
    },
    footerChange(path){
      if(path.indexOf("article") != -1 || path == "user-reg" || path == "user-login" ){
        this.$store.dispatch('hideFooter')
      }else{
        this.$store.dispatch('showFooter')
      }
    }
  }
}
</script>

<style>
  @import './assets/css/index.css';
  @import './assets/css/animate.css';
</style>
