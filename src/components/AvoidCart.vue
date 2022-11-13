<template>
    <section class="avoid-cart">
            <div class="avoid-cart-container">
                <h1 class="avoid-cart-heading">SHOPPING CART</h1>
                <p class="avoid-cart-desc">there are no item in cart</p>
                <div class="avoid-cart-btn"><a href=""  @click="goToHome" class="avoid-cart-button">CONTINUE SHOPPING</a></div>
            </div>
          </section>
    </template>
    
    <script>
    export default {
    name: "AvoidCart",
    props: {
    msg: String,
    },
    methods:{
        goToHome(){
            this.$router.push('/')
        }
    }
    };
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>