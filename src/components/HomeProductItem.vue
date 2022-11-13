<template>
  <div class="home-product-item">
    <router-link :to="'/product/'+ item._id">
      <div class="home-product-img">
        <img :src="item.image" alt="" />
      </div>
      <div class="home-product-content">
        <p class="home-product-heading">{{ item.name }}</p>
        <p class="home-product-button">
          <a href="">Add To Cart</a>
        </p>
      </div>
    </router-link>
  </div>
</template>
    
    <script>
export default {
  name: "HomeProductItem",
  props: ["item"],
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>