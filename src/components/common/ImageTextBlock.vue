<template>
  <div class="image-text-block">
    <div
      class="image-text-block__image"
      :class="{ 'image-text-block__image--right': alignment === 'right' }"
    >
      <img :src="imageSrc" :alt="imageAlt" loading="lazy" />
      <div class="image-text-block__image-wrapper">
        <div
          class="left-block"
          :class="{ 'left-block--active': alignment === 'left' }"
        ></div>
        <div
          class="right-block"
          :class="{ 'right-block--active': alignment === 'right' }"
        ></div>
      </div>
    </div>
    <div class="image-text-block__content">
      <div class="image-text-block__content--title">{{ title }}</div>
      <div class="image-text-block__content--descr">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageTextBlock",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    alignment: {
      type: String,
      default: "left",
      validator: (value) => ["left", "right"].includes(value),
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.image-text-block {
  display: flex;
  align-items: center;
  gap: 2em;

  &__image,
  &__content {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  &__image {
    position: relative;
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      border-radius: 8px;
      z-index: 2;
    }
    &-wrapper {
      position: absolute;
      width: 110%;
      height: 110%;
      display: flex;
      top: -5%;
      left: -5%;

      .left-block,
      .right-block {
        display: flex;
        flex: 1;
      }
      .left-block--active {
        border-radius: 8px 0 0px 8px;
        background-color: $background-color-primary;
      }
      .right-block--active {
        border-radius: 0 8px 8px 0;
        background-color: $background-color-primary;
      }
    }
    &--right {
      order: 1;
    }
  }
  &__content {
    flex-direction: column;
    gap: 2em;

    &--title {
      font-size: 2em;
      font-weight: 700;
      color: $background-color-primary;
    }
    &--descr {
      font-size: 1.5em;
      color: $color-secondary;
    }
  }
}
@media (max-width: $breakpoint-tablet) {
  .image-text-block {
    flex-direction: column;
    gap: 3em;

    &__content {
      &--title {
        font-size: 1.5em;
      }
      &--descr {
        font-size: 1.2em;
      }
    }
  }
}
@media (max-width: $breakpoint-laptop) {
  .image-text-block {
    &__content {
      gap: 1em;
      &--title {
        font-size: 1.5em;
      }
      &--descr {
        font-size: 1.2em;
      }
    }
  }
}
</style>
