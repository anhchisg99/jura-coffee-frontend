<template>
    <footer class="footer">
        <div class="footer-container">
          <div class="footer-address">
            <p class="footer-heading">EPICURE VINA  Co. Ltd.</p>
            <p class="footer-desc">
              121/20 Nguyen Hoang Street An Phu Ward, District.2 Ho Chi Minh
              City
            </p>
            <span class="footer-icon"
              ><ion-icon name="chevron-down-outline"></ion-icon
            ></span>
          </div>
          <div class="footer-contact">
            <p class="footer-heading"> Shop online</p>
            <p class="footer-desc">
              Go to the Online Shop of our official partner Coffeemart in
              Vietnam.
            </p>
            <span class="footer-icon"
              ><ion-icon name="chevron-down-outline"></ion-icon
            ></span>
          </div>
        </div>
      </footer>
  </template>
    
    <script>
  export default {
    name: "Footer",
    props: {
      msg: String,
    },
  };
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  </style>