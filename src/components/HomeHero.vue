<template>
  <div class="home-hero">
    <div class="home-hero__image"></div>
    <div class="home-hero__text">
      <div class="home-hero__text--content">
        <span class="home-hero__text--content-title">{{
          $t("home.hero.title")
        }}</span>
        <span class="home-hero__text--content-name">{{
          $t("home.hero.name")
        }}</span>
        <span class="home-hero__text--content-subtitle">{{
          $t("home.hero.subtitle")
        }}</span>
        <button class="home-hero__text--content-button" @click="onButtonClick">
          {{ $t("home.hero.buttonText") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
  methods: {
    onButtonClick() {
      this.$emit("button-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
$hero-image: url("../assets/images/heroImage.jpg");

.home-hero {
  display: flex;
  height: 90vh;

  &__image {
    flex: 2;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      $hero-image no-repeat center center/cover;
  }
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: $background-color-secondary;
    padding: 0 2em;

    &--content {
      display: flex;
      flex-direction: column;
      gap: 1em;

      &-title {
        font-size: 1.2em;
        font-weight: 400;
        color: $color-secondary;
      }
      &-name {
        font-size: 2em;
        font-weight: 700;
        color: $background-color-primary;
      }
      &-subtitle {
        font-size: 1.5em;
        color: $background-color-primary;
      }
      &-button {
        width: 80%;
        font-size: 1em;
        font-weight: 700;
        padding: 1em 2em;
        color: $color-primary;
        background: $background-color-primary;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: background 0.3s ease, color 0.3s ease;

        &:hover {
          background: $background-color-primary;
          color: $background-color-secondary;
        }
      }
    }
  }
}
@media (max-width: $breakpoint-tablet) {
  .home-hero {
    flex-direction: column;
    &__image {
      flex: 1;
      height: 50vh;
    }
    &__text {
      padding: 2em 1em;
      &--content {
        align-items: center;
        text-align: center;
        &-title {
          font-size: 1.4em;
        }
        &-name {
          font-size: 1.25em;
        }
        &-subtitle {
          font-size: 1em;
        }
        &-button {
          font-size: 0.8em;
          font-weight: 900;
        }
      }
    }
  }
}
</style>
