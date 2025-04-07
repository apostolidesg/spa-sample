<template>
  <div class="about-page">
    <div class="hero-section">
      <HeroBlock :title="$t('about.hero.title')" />
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
    <SectionSeparator :content="$t('about.FAQ.title')" theme="white" />
    <div class="faq-section">
      <div class="spa-container">
        <FAQ />
      </div>
    </div>
  </div>
</template>

<script>
import ImageTextBlock from "../components/common/ImageTextBlock.vue";
import HeroBlock from "../components/common/HeroBlock.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import FAQ from "../components/FAQ.vue";

export default {
  name: "About",
  components: {
    ImageTextBlock,
    HeroBlock,
    SectionSeparator,
    FAQ,
  },
  data() {
    return {
      aboutMeImage: "/images/about.jpg",
      educationImage: "/images/education.jpg",
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.faq-section {
  background-color: $background-color-primary;
}
</style>
