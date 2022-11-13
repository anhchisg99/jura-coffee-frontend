<template>
  <div class="cart-item">
    <div class="cart-img">
      <div class="cart-image">
        <img :src="item.image" alt="" />
      </div>
    </div>
    <!-- <cart-info v-for="(item, idx) in cartItems" :key="idx" :item="item" /> -->
    <div class="cart-info">
      <h3 class="cart-heading">
        {{ item.name }}
      </h3>
      <p class="cart-warranty">1x Manufacturer 2-Year Warranty</p>
      <p class="cart-price">
        <span>${{ item.price }}</span>
      </p>
      <!--  <div class="cart-quantity-box">
                                <span>
                                    <ion-icon name="remove-outline"></ion-icon>
                                </span>
                                <input type="text">
                                <span> <ion-icon name="add-outline"></ion-icon></span>
                            </div> -->
      <div class="cart-quantity">
        <div class="quantity">
          <input @click="removeFromCart()" type="button" value="-" class="minus is-form" />

          <input
            v-model="item.quantity"
            :title="Qty"
            type="number"
            id="quantity_631c12ba7b0c9"
            class="input-text qty text"
            step="1"
            min="1"
            max="10"
            name="quantity"
            size="4"
            placeholder="0"
            inputmode="numeric"
          />
          <input @click="addToCArt()" type="button" value="+" class="plus is-form" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CartItem",
  props: ["item"],
  computed:{
    ...mapState('inventories',{inventory:state=>state.inventory}),
  },
  methods:{
    removeFromCart(){
      return this.$store.commit('cart/removeFromCart',this.item)
    },
    addToCArt(){
      console.log('thanh cong')
      this.$store.commit('cart/addToCart',this.item)
      // this.$store.commit('cart/openPopup')
      
      
    },

  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
</style>