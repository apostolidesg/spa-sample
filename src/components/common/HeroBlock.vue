<template>
  <div class="hero-block">
    <div class="spa-container">
      <div class="hero-block__text">
        <span class="hero-block__text--content-title">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBlock",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.hero-block {
  display: flex;
  height: 40vh;
  background: $background-color-secondary;

  &__text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 4em;
    color: $color-secondary;
    font-family: "Playfair Display", serif;
  }
}
@media (max-width: $breakpoint-tablet) {
  .hero-block {
  }
}
</style>
