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
        :description="$t('about.description')"
      />
    </div>
  </div>
</template>

<script>
import HeroBlock from "../components/HeroBlock.vue";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import ImageTextBlock from "../components/common/ImageTextBlock.vue";
import aboutMeImage from "../assets/images/aboutMe.jpg";

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
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.push("about");
    },
  },
};
</script>
