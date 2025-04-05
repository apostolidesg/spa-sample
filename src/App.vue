<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" :key="$route.path" />
  </router-view>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
      });

      // Clear cache API if available
      if (window.caches) {
        caches.keys().then((names) => {
          names.forEach((name) => caches.delete(name));
        });
      }
    }
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
