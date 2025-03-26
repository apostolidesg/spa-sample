<template>
  <div class="contact-page">
    <div class="hero-section">
      <HeroBlock :title="$t('contact.hero.title')" />
    </div>
    <SectionSeparator :content="$t('home.contact.title')" theme="dark-green" />
    <div class="contact-section">
      <div class="spa-container">
        <ContactUs />
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
import ContactUs from "../components/ContactUs.vue";
import ContactInfoBlock from "../components/ContactInfo.vue";
export default {
  name: "Contact",
  components: {
    HeroBlock,
    SectionSeparator,
    ContactUs,
    ContactInfoBlock,
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

.info-section {
  background-color: $background-color-secondary;
}
</style>
