import { createRouter, createWebHistory } from "vue-router";
import Vue from 'vue'


import Home from "../components/Home.vue";
import ProductMain from '../components/ProductMain'
import Categories from '../components/Categories.vue'
import Cart from '../components/Cart.vue'
import Payment from '../components/Payment.vue'
import Success from '../components/Success.vue'

import store from '../store/index.js'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,

  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
    beforeEnter: (to, from, next) => {
      if (store.getters['cart/isItem'] != 0) {
        next()
      } else {
        next('/')
      }
    }

  },
  {
    path: "/success",
    name: "Success",
    component: Success,
    // beforeEnter: (to, from, next) => {
    //   if (store.getters['cart/isItem'] != 0) {
    //     next()
    //   } else {
    //     next('/')
    //   }
    // }
  },

  {
    path: "/categories/:id",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/product/:id",
    name: "ProductMain",
    component: ProductMain,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default router
