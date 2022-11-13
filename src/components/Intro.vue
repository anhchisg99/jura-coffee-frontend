<template>
    <section class="intro">
          <div class="intro-container">
            <div class="intro-img">
              <img
                srcset="
                  https://vn.jura.com/-/media/global/images/teaser-elemente/full-bleed-teaser/img/fullbleed_giga6_innen.webp?la=en&vs=2&mw=5120&hash=37F4B7054BDF6E4817A762F5DF1B4BEC8F92CB1A 2x
                "
                alt=""
              />
            </div>
            <div class="intro-content">
              <p class="intro-heading">Optimum maintenance</p>
              <p class="intro-desc">
                Have you ever thought about the right way to maintain and clean
                your automatic coffee machine?
              </p>
              <p><a class="intro-button" href="#">Read more</a></p>
            </div>
          </div>
        </section>
  </template>
    
    <script>
  export default {
    name: "Intro",
    props: {
      msg: String,
    },
  };
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  </style>