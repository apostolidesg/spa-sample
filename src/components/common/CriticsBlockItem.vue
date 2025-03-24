<template>
  <div class="critics-block-item">
    <div class="critics-block-item__icon">
      <i class="fa-solid fa-quote-right"></i>
    </div>
    <div class="critics-block-item__content">
      {{ $t(`services.${criticsItem}.content`) }}
    </div>
    <div class="critics-block-item__name">
      {{ $t(`services.${criticsItem}.name`) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CriticsBlockItem",
  props: {
    criticsItem: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.critics-block-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  &__icon {
    font-size: 2.5em;
    color: $default-black;
  }
  &__content {
    width: 60%;
    font-size: 1.2em;
    color: $color-secondary;
  }
  &__name {
    font-size: 1.7em;
    font-weight: 700;
    color: $background-color-primary;
  }
  @media (max-width: $breakpoint-laptop) {
    &__content {
      width: 80%;
      order: 1;
      font-size: 1em;
    }
    &__name {
      font-size: 1.4em;
    }
  }
}
</style>
