<template>
  <div class="service-block-item">
    <div class="service-block-item__number">
      {{ serviceIndex }}
    </div>
    <div class="service-block-item__description">
      {{ serviceDescription }}
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
  },
  computed: {
    serviceDescription() {
      return this.$t(`services.${this.serviceItem}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.service-block-item {
  display: flex;
  justify-self: center;
  max-width: 400px;
  background-color: $background-color-primary-light;
  padding: 4em 2em;
  border-radius: 10px;
  color: white;

  &__number,
  &__description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__number {
    flex: 1;
    font-size: 2.5em;
  }
  &__description {
    flex: 2;
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
  }
}
</style>
