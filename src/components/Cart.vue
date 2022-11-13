<template>
  <main>
    <!-- <h1 style="height:500px;color:red;border:1px solid blue" v-if="isOK">chan</h1>
    <h1 style="height:200px;color:red" v-else>ko chan</h1> -->
    <avoid-cart v-if="isItem">Vue is awesome!</avoid-cart>

    <div v-else class="cart">
    <div class="cart-container">
      <div class="cart-left">
        <div class="cart-items">
          <cart-item
            v-for="(item, idx) in cartItems"
            :key="idx"
            :item="item"
          />
        </div>
      </div>

      <div class="cart-right">
        <div class="cart-table">
          <div class="cart-total">
            <span class="right">Subtotal</span>
            <span>${{subTotal}}</span>
          </div>
          <div class="cart-sale">
            <span class="right">Total Savings </span>
            <span>$30.00</span>
          </div>
          <p class="cart-checkout">
            <!-- alert -->
            <router-link to="/payment">
            <a href="" class="btn-cart check-out">Check out</a>
          </router-link>
          </p>
          <div class="cart-button">
            <router-link to="/">

            <a href="" class="btn-cart continue-shopping"
              >Continue to shopping</a
            >
          </router-link>

          </div>
        </div>
      </div>
    </div>
  </div>

   

    
   
  </main>
</template>
    
    <script>
import CartItem from "./CartItem.vue";
import AvoidCart from "./AvoidCart.vue";
import { mapState,mapMutations } from "vuex";

export default {
  components: { CartItem,AvoidCart },
  name: "Cart",
  props: {
    msg: String,
  },
  data(){
    return {
      // isOK: this.$store.getters["cart/cartItems"].length == 0?true:false
      // isOK: true
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters["cart/cartItems"]
    },
    isItem(){
      return this.$store.getters["cart/cartItems"].length == 0?true:false
    },
    subTotal(){
      return this.$store.getters["cart/subTotal"]

    },

    ...mapState('cart',{cart:state=>state.cart})

  },
  methods:{
    payment(){
      return this.$router.push({path:'/payment'})
    }
  }
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>