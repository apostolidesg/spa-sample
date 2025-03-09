<template>
  <div class="hero-section">
    <HeroBlock
      :title="$t('home.hero.title')"
      :subtitle="$t('home.hero.subtitle')"
      :button-text="$t('home.hero.buttonText')"
      @button-click="handleButtonClick"
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
</template>

<script>
import HeroBlock from "../components/HeroBlock.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import ImageTextBlock from "../components/common/ImageTextBlock.vue";
import aboutMeImage from "../assets/images/aboutMe.jpg";
import educationImage from "../assets/images/education.jpg";

export default {
  name: "Home",
  components: {
    HeroBlock,
    SectionSeparator,
    ImageTextBlock,
  },
  data() {
    return {
      aboutMeImage,
      educationImage,
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.push("about");
    },
  },
};
</script>
