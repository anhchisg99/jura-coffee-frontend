<template>
  <main>
    <Carasel/>
    <products/>
    <intro/>
    

    <!-- <Introduction /> -->
    <!-- <home-product /> -->

    <!-- <item/>
    <carasel/>
    <item-navigation/>
    <description/> -->
    <!-- <Cart/> -->
    <!-- <avoid-cart/> -->
    
  </main>
</template>
    
    <script>
// import AvoidCart from './AvoidCart.vue';
import Carasel from "./Carasel.vue";
import Products from "./Products.vue";
import Intro from "./Intro.vue";

// import HomeProduct from "./HomeProduct.vue";
// // import Introduction from "./Introduction.vue";

// import Carasel from './Carasel.vue';
// import Item from './Item.vue';
// import Description from './Description.vue';
// import ItemNavigation from './ItemNavigation.vue';
// import Cart from './Cart.vue'


export default {
  name: "Main",
  components: {
      Carasel,
      Products,
      Intro,
      
      // HomeProduct,
      // Introduction,

    //   ItemNavigation,
    //   Description,
    //   Carasel,
    //   Item,

    // Cart,
    // AvoidCart,
    },
  props: {
    msg: String,
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
    