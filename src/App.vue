<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.path" />
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
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

.testimonial {
  white-space: pre-line;
}
</style>
