<template>
  <div
    class="service-block-item"
    :class="{ 'service-block-item--background': !showIcon }"
  >
    <div v-if="showIcon" class="service-block-item__icon">
      <i class="fa-solid fa-clipboard"></i>
    </div>
    <div v-else class="service-block-item__number">
      {{ serviceIndex }}
    </div>
    <div class="service-block-item__label">
      <div class="service-block-item__label-title">
        {{ $t(`services.${serviceItem}.title`) }}
      </div>
      <div v-if="showIcon" class="service-block-item__label-content">
        {{ $t(`services.${serviceItem}.content`) }}
      </div>
    </div>
    <div v-if="showIcon" class="service-block-item__extra-info">
      <div>{{ $t(`services.${serviceItem}.duration`) }}</div>
      <!-- <div>{{ $t(`services.${serviceItem}.price`) }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceBlockItem",
  props: {
    serviceIndex: {
      type: Number,
      default: 1,
    },
    serviceItem: {
      type: String,
      default: "",
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.service-block-item {
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1px white;
  padding: 1em 0em;
  gap: 1em;

  &--background {
    width: auto;
    background-color: $background-color-primary-light;
    box-shadow: 0 4px 8px #0000001a;
    border-radius: 10px;
    padding: 2em;
    border: none;
    gap: 2em;
  }

  &__number {
    width: 20%;
    text-align: center;
    font-size: 2em;
    color: $default-white;
  }

  &__icon {
    font-size: 1.5em;
    color: #064848;
    border: solid;
    border-radius: 50%;
    padding: 0.4em 0.5em;
    background: #d8efed;
  }
  &__label {
    width: 60%;
    color: white;
    font-size: 1.5em;
    line-height: 1.5em;

    &-content {
      font-size: 0.7em;
    }
  }
  &__extra-info {
    color: #d8efed;
    font-size: 1.2em;
    line-height: 1.5em;
  }
  @media (max-width: 768px) {
    width: auto;
    gap: 0.8em;
    &__icon {
      font-size: 1em;
    }
    &__label {
      font-size: 1em;
    }
    &__extra-info {
      font-size: 0.8em;
      min-width: 50px;
    }
  }
}
</style>
