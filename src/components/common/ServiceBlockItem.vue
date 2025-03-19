<template>
  <div class="service-block-item" @click="toggleShowExtra()">
    <div class="service-block-item__number">
      {{ serviceIndex }}
    </div>
    <div class="service-block-item__description">
      {{ serviceDescription }}
    </div>
    <div v-show="expandInfo" class="service-block-item__extra-info">
      {{ serviceExtraInfo }}
    </div>
    <div v-if="showExtraInfo" class="service-block-item__toggle">
      <i
        class="fa-solid fa-angle-right service-block-item__toggle-icon"
        :class="{ 'is-expanded': expandInfo }"
      ></i>
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
    showExtraInfo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      expandInfo: false,
    };
  },
  computed: {
    serviceDescription() {
      return this.$t(`services.${this.serviceItem}`);
    },
    serviceExtraInfo() {
      return this.$t(`services.${this.serviceItem}_extra_info`);
    },
  },
  methods: {
    toggleShowExtra() {
      this.showExtraInfo && (this.expandInfo = !this.expandInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/scss/variables" as *;

.service-block-item {
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 4em;
  max-width: 80%;
  background-color: $background-color-primary-light;
  padding: 4em 2em;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  &__number,
  &__description,
  &__extra-info,
  &__toggle-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    transition: display 3s ease;
  }
  &__number,
  &__toggle {
    flex: 1;
    font-size: 2.5em;
  }
  &__description,
  &__extra-info {
    flex: 2;
    font-size: 1.2em;
  }
  &__toggle {
    display: flex;
    justify-content: center;
    &-icon {
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .is-expanded {
      transform: rotate(180deg);
    }
  }
  @media (max-width: 768px) {
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
