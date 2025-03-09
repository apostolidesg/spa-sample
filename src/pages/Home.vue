<template>
  <HeroBlock
    :title="$t('home.hero.title')"
    :subtitle="$t('home.hero.subtitle')"
    :button-text="$t('home.hero.buttonText')"
    @button-click="handleButtonClick"
  />
  <div>Welcome to our simple Vue SPA!</div>
</template>

<script>
import HeroBlock from "../components/HeroBlock.vue";

export default {
  components: {
    HeroBlock,
  },
  methods: {
    handleButtonClick() {
      this.$router.push("about");
    },
  },
};
</script>
