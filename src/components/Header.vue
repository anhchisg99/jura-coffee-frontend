<template>
  <header>
    <div class="header">
      <div class="header-container">
        <div class="header-img">
          <router-link to="/">
            <img
              srcset="
                https://vn.jura.com/-/media/global/images/logo/logo.png?h=118&la=en&w=276&hash=8ABCE55A88AEB716D235CEFE4C944C9944D85A81 2x
              "
              alt=""
            />
          </router-link>
        </div>
        <div class="header-info">
          <div class="header-content">
            <ul>
              <li>
                <span class="header-vn">Japan </span>
              </li>
              <!-- <li class="bell-icon">
                <router-link to="/cart">
                  <span class="icon">
                    <ion-icon name="cart-outline"></ion-icon>
                  </span>
                  <span>{{ getQuantity }} </span>
                </router-link>
              </li> -->
              <li class="popup bell-icon" >
                <router-link to="/cart">
                  <span class="icon" @click="closePopup()">
                    <ion-icon class="icon-cart" name="cart-outline"></ion-icon>
                  </span>
                  <span class="bell-icon-quantity">{{ getQuantity }} </span>
                </router-link>
                <span
                 
                  class="popuptext"
                  :class="{ show:this.isPopup }"
                  id="myPopup"
                  >Item have been added successful!</span
                >
              </li>
              <li>
                <span class="icon">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
              </li>
            </ul>
          </div>
          <div class="header-menu">
            <span class="icon"><ion-icon name="menu-outline"></ion-icon></span>
            <span>MENU</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Header",
  props: {
    msg: String,
  },
  computed: {
    ...mapState('cart',{isPopup:state=>state.isPopup}),

    getQuantity() {
      return this.$store.getters["cart/totalQuantity"];
    },
  },
  methods: {
    closePopup(){
      return this.$store.commit('cart/closePopup')
    }
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
</style>