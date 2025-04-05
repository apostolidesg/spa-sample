<template>
  <div class="home-page">
    <div class="hero-section">
      <HomeHero
        :title="$t('home.hero.title')"
        :subtitle="$t('home.hero.subtitle')"
        :button-text="$t('home.hero.buttonText')"
        @button-click="goTo('about')"
      />
    </div>
    <SectionSeparator :content="$t('home.about.title')" theme="dark-green" />
    <div class="about-section">
      <div class="spa-container">
        <ImageTextBlock
          :imageSrc="aboutMeImage"
          :imageAlt="$t('about.imageAlt')"
          alignment="right"
          :title="$t('about.title')"
          :description="['about.description']"
        />
        <ImageTextBlock
          :imageSrc="educationImage"
          :imageAlt="$t('about.education.imageAlt')"
          alignment="left"
          :title="$t('about.education.title')"
          :description="[
            'about.education.description0',
            'about.education.description1',
            'about.education.description2',
            'about.education.description3',
          ]"
          :listDecorations="true"
        />
      </div>
    </div>
    <SectionSeparator :content="$t('home.services.title')" theme="white" />
    <div class="services-section">
      <div class="spa-container">
        <ServiceBlock
          :buttonText="$t('services.readMore')"
          @button-click="goTo('services')"
        />
      </div>
    </div>
    <SectionSeparator :content="$t('home.contact.title')" theme="light-green" />
    <div class="contact-info-section">
      <div class="spa-container">
        <ContactInfo />
      </div>
    </div>
  </div>
</template>

<script>
import HomeHero from "../components/HomeHero.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import ImageTextBlock from "../components/common/ImageTextBlock.vue";
import ServiceBlock from "../components/ServiceBlock.vue";
import ContactInfo from "../components/ContactInfo.vue";

export default {
  name: "Home",
  components: {
    HomeHero,
    SectionSeparator,
    ImageTextBlock,
    ServiceBlock,
    ContactInfo,
  },
  data() {
    return {
      aboutMeImage: "aboutMe",
      educationImage: "education",
    };
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
.contact-info-section {
  background-color: $background-color-secondary;
}
</style>
