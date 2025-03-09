<template>
  <div class="about-page">
    <div class="hero-section">
      <HeroBlockAbout />
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
  </div>
</template>

<script>
import ImageTextBlock from "../components/common/ImageTextBlock.vue";
import HeroBlockAbout from "../components/HeroBlockAbout.vue";
import aboutMeImage from "../assets/images/aboutMe.jpg";
import SectionSeparator from "../components/common/SectionSeparator.vue";
import educationImage from "../assets/images/education.jpg";

export default {
  name: "AboutSection",
  components: {
    ImageTextBlock,
    HeroBlockAbout,
    SectionSeparator,
  },
  data() {
    return {
      aboutMeImage,
      educationImage,
    };
  },
};
</script>
