<template>
  <section class="home-product">
    <div class="home-product-container">
        <home-product-item v-for="(item, index) in categories" :key="index" :item=item />
    </div>
  </section>
</template>
    
    <script>
import { mapState } from "vuex";

import HomeProductItem from "./HomeProductItem.vue";
export default {
  components: { HomeProductItem },
  name: "HomeProduct",
  props: {
    msg: String,
  },
  computed:{
    ...mapState('categories',{categories:state=>state.categories})
  },
  mounted(){
    const route = this.$route.params.id
    this.$store.dispatch('categories/getHomeProduct',route)
  }
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>