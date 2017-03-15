<template>
  <div id="app">
    <NavView v-show="true"></NavView>
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

//import {mapGetters, mapActions} from 'vuex'

export default {
  // computed:mapGetters([
  //   'headerShow'
  // ]),
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
