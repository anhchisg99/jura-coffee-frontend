<template>
  <section class="products">
    <div class="products-container">
        <products-item v-for="(item, index) in categories" :key="index" :item=item />
    </div>
    
  </section>
</template>
    
    <script>
import ProductsItem from './ProductsItem.vue';
export default {
  components: { ProductsItem },
  name: "Product",

  props: ['categories']
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>
    