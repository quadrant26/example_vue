<template>
  <div id="app">
    <NavView v-show="true"></NavView>
    <div class="content">
      <router-view></router-view>
    </div>
    <FooterView v-show="true"></FooterView>
  </div>
</template>

<script>
import NavView from './components/Nav.vue';
import FooterView from './components/Footer.vue'

//import {mapGetters, mapActions} from 'vuex'

export default {
  // computed:mapGetters([
  //   'headerShow'
  // ]),
  components : {
    NavView,
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
</style>
