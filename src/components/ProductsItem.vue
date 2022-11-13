<template>
    <div class="products-item">
        <router-link :to="'/categories/' + item._id">
      <div class="products-img">
        <img
          
          :src="item.image"
        />
      </div>
      <div class="products-content">
        <p class="products-heading">{{item.name}}</p>
        <p class="products-desc">
          {{item.description}}
        </p>
      </div>
      </router-link>
    </div>
</template>
    
    <script>
export default {
  name: "ProductsItem",
  props: ['item']
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>