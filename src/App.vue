<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.path" />
  </router-view>
  <Footer v-if="hasGDPR" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      hasGDPR: false,
    };
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
