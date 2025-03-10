<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
