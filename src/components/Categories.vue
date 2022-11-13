<template>
    <main>

        <introduction />
        <home-product/>
    </main>
</template>
    
    <script>
import HomeProduct from './HomeProduct.vue';
import Introduction from "./Introduction.vue";
export default {
  components: { Introduction, HomeProduct },
  name: "Categories",
  props: {
    msg: String,
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>