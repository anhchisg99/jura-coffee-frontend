<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Header/>
  <!-- <Main/> -->
  <router-view>

  </router-view>
  <!-- <p>{{items}}</p> -->
  <Footer/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
// import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

import { mapState,mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    // Main,P
    Footer,
  },
  computed:{
    ...mapState('shop',{items:state=>state.items,message:state=>state.message}),

  },
  mounted(){
    this.$store.dispatch('shop/getItems'),
    this.$store.commit('cart/updateCartFromLocalStorage')
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
