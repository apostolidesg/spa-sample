<template>
  <div class="services-page">
    <div class="hero-section">
      <HeroBlock :title="$t('services.hero.title')" />
    </div>
    <SectionSeparator :content="$t('home.services.title')" theme="white" />
    <div class="services-section">
      <div class="spa-container">
        <ServiceBlock
          :showIcon="true"
          :buttonText="$t('services.readMore')"
          @button-click="goTo('services')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from "../components/common/HeroBlock.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import ServiceBlock from "../components/ServiceBlock.vue";
export default {
  name: "Services",
  components: {
    HeroBlock,
    SectionSeparator,
    ServiceBlock,
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
.services-section {
  background-color: $background-color-primary;
}
</style>
