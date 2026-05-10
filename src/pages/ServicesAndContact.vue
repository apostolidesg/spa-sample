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
    <SectionSeparator :content="$t('home.contact.title')" theme="light-green" />
    <div class="form-section">
      <div class="spa-container">
        <ContactUs />
      </div>
    </div>
    <SectionSeparator :content="$t('contact.info')" theme="white" />
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
import ContactUs from "../components/ContactUs.vue";
export default {
  name: "ServicesAndContact",
  components: {
    HeroBlock,
    SectionSeparator,
    ContactInfoBlock,
    ServiceBlock,
    ContactUs,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/themes" as *;

.services-contact-section {
  @include theme-dark;
}
.form-section {
  @include theme-light;
  padding: 5em 0 6em;
}
.info-section {
  @include theme-dark;
}
</style>
