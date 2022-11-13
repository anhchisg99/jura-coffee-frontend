<template>
  <div class="payment">
    <div class="payment-container">
      <div class="payment-left">
        <div class="payment-wrapper">
          <div class="payment-contact">
            <h3 class="payment-heading">Contact information</h3>
            <div class="payment-email payment-field">
              <label
                class="field__label field__label--visible"
                for="checkout_email"
                >Email</label
              >
              <input
                v-model="email"
                placeholder="Email"
                autocapitalize="off"
                spellcheck="false"
                autocomplete="shipping email"
                data-shopify-pay-handle="true"
                data-autofocus="true"
                data-backup="customer_email"
                aria-describedby="checkout-context-step-one"
                aria-required="true"
                class="field__input"
                size="30"
                type="email"
                name="checkout[email]"
                id="checkout_email"
              />
              <p v-if="errors.length">entering email ...</p>
            </div>
          </div>
          <div class="payment-address">
            <h3 class="payment-heading">Shipping address</h3>
            <div class="payment-email payment-field">
              <label
                class="field__label field__label--visible"
                for="checkout_email"
                >Email</label
              >
              <input
                placeholder="Shipping"
                autocapitalize="off"
                spellcheck="false"
                autocomplete="shipping email"
                data-shopify-pay-handle="true"
                data-autofocus="true"
                data-backup="customer_email"
                aria-describedby="checkout-context-step-one"
                aria-required="true"
                class="field__input"
                size="30"
                id="checkout_email"
              />
            </div>
            <div class="payment-fullname">
              <div class="payment-firstname payment-field">
                <label
                  class="field__label field__label--visible"
                  for="checkout_email"
                  >Email</label
                >
                <input
                  v-model="city"
                  placeholder="City"
                  autocapitalize="off"
                  spellcheck="false"
                  autocomplete="shipping email"
                  data-shopify-pay-handle="true"
                  data-autofocus="true"
                  data-backup="customer_email"
                  aria-describedby="checkout-context-step-one"
                  aria-required="true"
                  class="field__input"
                  size="30"
                  type="email"
                  name="checkout[email]"
                  id="checkout_email"
                />
              </div>
              <div class="payment-lastname payment-field">
                <label
                  class="field__label field__label--visible"
                  for="checkout_email"
                  >Email</label
                >
                <input
                  v-model="street"
                  placeholder="Street"
                  autocapitalize="off"
                  spellcheck="false"
                  autocomplete="shipping email"
                  data-shopify-pay-handle="true"
                  data-autofocus="true"
                  data-backup="customer_email"
                  aria-describedby="checkout-context-step-one"
                  aria-required="true"
                  class="field__input"
                  size="30"
                  type="email"
                  name="checkout[email]"
                  id="checkout_email"
                />
              </div>
            </div>
            <div class="payment-button">
              <a href="">
                <span>
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </span>
                <!-- <span @click="removeAllFromCart()">Return to cart</span> -->
                <span @click="removeAllFromCart()">Return to cart</span>
              </a>
              <button @click="makeOrderAndremoveAllFromCart()">
                Continue to Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="payment-right">
        <div class="payment-wrapper">
          <product-table
            v-for="(item, idx) in cartItems"
            :key="idx"
            :item="item"
          />
          <table>
            <tr>
              <th>Subtotal</th>
              <td>{{ subTotal }}</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>Calculated at next step</td>
            </tr>
            <tr>
              <th>Total</th>
              <td class="payment-total-price">${{ subTotal }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import ProductTable from "./ProductTable.vue";
export default {
  name: "Payment",
  components: {
    ProductTable,
   
  },
  data() {
    return {
      email: "",
      street: "",
      city: "",
      errors: [],
    };
  },
  props: {
    // ProductTable   msg: String,
  },
  computed: {
    cartItems() {
      return this.$store.getters["cart/cartItems"];
    },
    subTotal() {
      return this.$store.getters["cart/subTotal"];
    },
  },
  methods: {
    isRequired(value) {
      if (!value) {
        return 'this field is required';
      }
      
      return true;
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkForm() {
   
      if (!this.email) {
        this.errors.push("Email required.");
      } 
      if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) {
        return true;
      }
      // this.errors = []
      e.preventDefault();
    },
    async makeOrderAndremoveAllFromCart() {
      this.errors = []
      let isOk = this.checkForm()
      console.log('capture 1')
      if (isOk) {
        await this.makeOrder();
        this.$router.push("/success");
      }

    },

    async makeOrder() {
      const isSuccess = await this.$store.dispatch("order/makeOrder", {
        email: this.email,
        city: this.city,
        street: this.street,
      });
      return isSuccess;
      // this.$router.push("Success");
    },
    async removeAllFromCart() {
      return await this.$store.commit("cart/removeAllFromCart");
    },
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>