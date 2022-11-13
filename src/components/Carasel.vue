<template>
    <section class="carasel">
          <div class="carasel-container">
            <div class="carasel-content">
              <p>Perfect coffee enjoyment at work</p>
              <p>Perfect coffee enjoyment at work and safe</p>
            </div>
            <div class="carasel-img">
              <img
                src="https://vn.jura.com/-/media/global/images/content-slider/homepage/img/hero-x8-komp.webp?la=en&vs=1&mw=5120&hash=6572DDA99A7EBF9C30588D1CD959556C2F80F2C6"
                alt=""
              />
            </div>
            <div class="carasel-back">
              <span class="icon"
                ><ion-icon name="chevron-back-outline"></ion-icon
              ></span>
            </div>
            <div class="carasel-forward">
              <span class="icon"
                ><ion-icon name="chevron-forward-outline"></ion-icon
              ></span>
            </div>
          </div>  
        </section>
  </template>
    
    <script>
  export default {
    name: "Carasel",
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
    