<template>
  <div class="service-block">
    <div class="service-block__title">{{ $t("services.title") }}</div>

    <div
      class="service-block__wrapper"
      :class="{ 'service-block__wrapper-list': showIcon }"
    >
      <ServiceBlockItem
        v-for="service in services"
        :serviceIndex="service.index"
        :serviceItem="service.value"
        :showIcon="showIcon"
      />
    </div>

    <div
      v-if="!showIcon"
      class="service-block__button"
      @click="handleButtonClick"
    >
      {{ buttonText }}
    </div>
  </div>
</template>

<script>
import ServiceBlockItem from "./common/ServiceBlockItem.vue";
import { SERVICE_ITEMS } from "../constants/commonConstants";

export default {
  name: "ServiceBlock",
  props: {
    showIcon: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "",
    },
  },
  components: { ServiceBlockItem },
  data() {
    return {
      services: SERVICE_ITEMS,
    };
  },
  methods: {
    handleButtonClick() {
      this.$emit("button-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.service-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  &__title {
    font-size: 2em;
    color: $default-white;
    text-align: center;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
  &__wrapper-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
  &__button {
    font-size: 1em;
    font-weight: 700;
    text-align: center;
    color: $background-color-primary;
    background: $color-primary;
    padding: 1em 2em;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      color: #064848d6;
      background: $background-color-secondary;
    }
  }
  @media (max-width: 768px) {
    &__wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
