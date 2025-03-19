<template>
  <div class="contact-page">
    <div class="hero-section">
      <HeroBlock :title="$t('contact.hero.title')" />
    </div>
    <SectionSeparator :content="$t('home.contact.title')" theme="white" />
    <div class="contact-section">
      <div class="spa-container">contact</div>
    </div>
  </div>
</template>

<script>
import HeroBlock from "../components/common/HeroBlock.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
export default {
  name: "Contact",
  components: {
    HeroBlock,
    SectionSeparator,
  },
  methods: {
    goTo(name) {
      this.$router.push(name);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.contact-section {
  background-color: $background-color-primary;
}
</style>
