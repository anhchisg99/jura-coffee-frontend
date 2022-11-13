<template>
  <main>
    <section class="product-main">
      <div class="product-main-container">
        <div class="product-main-image">
          <img
            :src="product.image"
            alt=""
          />
        </div>
        <div class="product-main-content">
          <h1 class="product-main-heading">
            {{product.name}}
          </h1>
          <p class="product-main-price">
            <span>{{product.price}}</span>
          </p>
          <p class="product-main-desc">
            The Profitec Pro 700 Flow Control is the best in show from Profitec
            when it comes to dialing in your perfect extraction. Manually
            profile shots with the new flow control valve to tease the best
            flavor possible from your espresso.
          </p>
          <div class="product-main-button">
            <div class="product-main-btn">
              <a class="btn-add-to-cart"  @click="addToCArt()">add to cart</a>
            </div>
            <div class="product-main-btn">
              <a href="javascript:window.history.back()" class="btn-detail" >Custom your machine</a>
            
            </div>
          </div>
          <div class="product-main-detail"></div>
          <div class="product-main-reward">
            <div class="product-main-reward-item">
              <span class="reward-icon">
                <ion-icon name="megaphone-outline"></ion-icon>
              </span>
              <!-- <p v-if="inventory.quantity">
                Stock : {{inventory.quantity}}
              </p> -->
              <p v-if="this.inventory === null">
                Stock : 0
              </p>
              <p v-else>
                Stock : {{inventory.quantity}}
              </p>

            </div>
            <div class="product-main-reward-item">
              <span class="reward-icon">
                <ion-icon name="airplane-outline"></ion-icon>
              </span>
              <p>
                Members earn 2% back in Latte Rewards. Sign in or Sign up now!
              </p>
            </div>
            <div class="product-main-reward-item">
              <span class="reward-icon">
                <ion-icon name="car-outline"></ion-icon>
              </span>
              <p>Free shipping on all orders over $50 or more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
    
    <script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ProductMain",
  props: {
    msg: String,
  },
  data(){
    return {
      isPopup:true
    }
  },
  computed:{
    ...mapState('product',{product:state=>state.product}),
    ...mapState('cart',{cart:state=>state.cart}),
    ...mapState('cart',{isPopup:state=>state.isPopup}),
    ...mapState('inventories',{inventory:state=>state.inventory}),
    product_total(){
      return this.$store.commit('cart/productQuantity',this.product)
    },
    isQuantity(){
      let isOk = this.$store.state['inventories/inventory']
      console.log({isOk})

      if(isOk){
        return this.inventory.quantity
      }else{
        return 0
      }
    }
  },
  methods:{
    async addToCArt(){
  
      let {quantity} = this.inventory

        if(quantity === 0){
        alert("out of stock");
      }
      
      else{

        this.$store.commit('cart/openPopup')
        console.log('thanh cong')
        this.$store.commit('cart/addToCart',this.product)
      }
      
      
    },
   
  },
  watch: {
    "$route.params.id": {
      handler: function (param) {
        this.$store.dispatch('inventories/getInventoryPerProduct',param)
        this.$store.dispatch('product/getPerProduct',param)
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>