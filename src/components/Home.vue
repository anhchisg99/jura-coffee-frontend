<template>
  <main>
    <carasel />
    <Suspense>
      <template #default>
        <products :categories="categories" />
      </template>

      <template #fallback> Loading Items ... </template>
      <!-- {{categories}} -->
    </Suspense>
      <intro />
  </main>
</template>
    
    <script>
import Carasel from "./Carasel.vue";
import Intro from "./Intro.vue";
import Products from "./Products.vue";

import { mapState } from "vuex";

export default {
  components: { Carasel, Products, Intro },
  name: "Home",
  props: {
    msg: String,
  },
  computed: {
    ...mapState("home", { categories: (state) => state.categories }),
  },
  mounted() {
    this.$store.dispatch("home/getCategoryHomePage");
  },
};
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
</style>