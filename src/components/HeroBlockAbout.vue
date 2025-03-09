<template>
  <div class="hero-block-about">
    <div class="hero-block-about__image">
      <div class="hero-block-about__text">
        <div class="hero-block-about__text--content">
          <span class="hero-block-about__text--content-title">{{
            $t("about.hero.title")
          }}</span>
          <span class="hero-block-about__text--content-description">{{
            $t("about.hero.description")
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBlockAbout",
  methods: {
    onButtonClick() {
      this.$emit("button-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
$hero-image-about: url("../assets/images/heroImageAbout.jpg");

.hero-block-about {
  height: 50vh;

  &__image {
    display: flex;
    justify-content: center;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      $hero-image-about no-repeat center center/cover;
  }
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Playfair Display", serif;

    &--content {
      display: flex;
      flex-direction: column;
      gap: 1em;

      &-title {
        font-size: 2em;
        font-weight: 400;
        color: $default-white;
      }
      &-description {
        max-width: 500px;
        font-size: 1.5em;
        font-weight: 400;
        color: $default-white;
      }
    }
  }
}
@media (max-width: $breakpoint-tablet) {
  .hero-block-about {
    flex-direction: column;
    &__image {
      flex: 1;
      height: 50vh;
    }
    &__text {
      padding: 2em 1em;
      &--content {
        align-items: center;
        &-title {
          font-size: 1.4em;
        }
        &-description {
          font-size: 1.25em;
          text-align: center;
        }
      }
    }
  }
}
</style>
