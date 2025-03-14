<template>
  <div class="section-separator" :class="[`section-separator--${theme}`]">
    <div
      class="section-separator__heading"
      :class="[`section-separator__heading--${theme}`]"
    >
      {{ content }}
    </div>
    <div
      class="section-separator__horizontal-line"
      :class="[`section-separator__horizontal-line--${theme}`]"
    ></div>
  </div>
</template>

<script>
export default {
  name: "SectionSeparator",
  props: {
    content: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "white",
      validator: (value) => ["white", "dark-green"].includes(value),
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.section-separator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 2rem 0;
  &--white {
    background-color: $background-color-primary;
  }
  &--dark-green {
    background-color: $default-white;
  }

  &__heading {
    font-size: 1em;
    font-weight: 700;

    &--white {
      color: $background-color-secondary;
    }
    &--dark-green {
      color: $background-color-primary;
    }
  }
  &__horizontal-line {
    width: 40px;
    height: 2px;
    &--white {
      background-color: $background-color-secondary;
    }
    &--dark-green {
      background-color: $background-color-primary;
    }
  }
}
</style>
