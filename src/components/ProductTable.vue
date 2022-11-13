<template>
  <table class="product-table">
    <tr>
      <td>
        <div class="product-image">
          <img
            :src="item.image"
            alt=""
          />
        </div>
      </td>
      <th class="product-desc">
        <span>{{item.name}} </span>
      </th>
      <td class="product-quantity"></td>
      <td class="product-price">{{item.price}}</td>
    </tr>
  </table>
</template>
    
    <script>
export default {
  name: "ProductTable",
  props: ['item']
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>