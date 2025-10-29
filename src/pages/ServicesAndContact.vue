<template>
  <div class="services-contact-page">
    <div class="hero-section">
      <HeroBlock :title="$t('servicesAndContact.hero.title')" />
    </div>
    <SectionSeparator :content="$t('home.services.title')" theme="white" />
    <div class="services-contact-section">
      <div class="spa-container">
        <ServiceBlock :showIcon="true" />
      </div>
    </div>
    <SectionSeparator :content="$t('contact.info')" theme="light-green" />
    <div class="info-section">
      <div class="spa-container">
        <ContactInfoBlock />
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from "../components/common/HeroBlock.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import ContactInfoBlock from "../components/ContactInfo.vue";
import ServiceBlock from "../components/ServiceBlock.vue";
export default {
  name: "ServicesAndContact",
  components: {
    HeroBlock,
    SectionSeparator,
    ContactInfoBlock,
    ServiceBlock,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.services-contact-section {
  background-color: $background-color-primary;
}
.info-section {
  background-color: $background-color-secondary;
}
</style>
