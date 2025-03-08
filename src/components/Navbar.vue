<template>
  <div class="navigation-bar">
    <div class="navigation-bar__wrapper">
      <div class="navigation-bar__wrapper--title">
        <div>{{ $t("navbar.logo.name") }}</div>
        <div>{{ $t("navbar.logo.title") }}</div>
      </div>
      <div class="navigation-bar__wrapper--toggle" @click="toggleCollapse">
        <i
          :key="showCollapse"
          :class="{
            'fa-bars': !showCollapse,
            'fa-xmark': showCollapse,
          }"
          class="fa-solid navigation-bar__wrapper--toggle-icon"
        ></i>
      </div>
      <div
        :class="[
          `navigation-bar__${isMobileView}--routes`,
          { 'navigation-bar__mobile--routes--is-open': showCollapse },
        ]"
      >
        <div
          v-for="route in routes"
          :key="route.name"
          class="navigation-bar__desktop--routes-item"
          @click="navigateTo(route.name)"
        >
          {{ $t(route.label) }}
        </div>
        <div
          class="navigation-bar__desktop--language-switcher"
          @click="toggleLanguage"
        >
          {{ $t("navbar.language") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NAVIGATION_ITEMS } from "../constants/commonConstants";

export default {
  data() {
    return {
      routes: Object.values(NAVIGATION_ITEMS),
      showCollapse: false,
      isMobile: false,
    };
  },
  computed: {
    isMobileView() {
      return this.isMobile ? "mobile" : "desktop";
    },
  },
  methods: {
    navigateTo(name) {
      this.$router.push(name);
    },
    toggleLanguage() {
      const newLocale = this.$i18n.locale === "en" ? "el" : "en";
      this.$i18n.locale = newLocale;
    },
    toggleCollapse() {
      this.showCollapse = !this.showCollapse;
    },
    handleResize() {
      if (window.innerWidth >= 576) {
        this.showCollapse = false;
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.navigation-bar {
  position: relative;
  background: $background-color-primary;
  color: $color-primary;
  padding: 2em 4em;

  &__wrapper {
    display: flex;

    &--title {
      flex: 1;
      line-height: 1.5em;
    }
    &--toggle {
      display: none;

      &-icon {
        animation: flip 0.3s ease-in-out;
      }
    }
  }
  &__desktop {
    &--routes {
      display: flex;
      justify-content: end;
      align-items: center;
      flex: 1;
      gap: 2em;
    }
  }
  &__mobile--routes {
    display: none;
  }
}
@media (max-width: $breakpoint-mobile) {
  .navigation-bar {
    &__wrapper {
      &--toggle {
        display: block;
        position: absolute;
        right: 10%;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 2em;
        z-index: 1;
      }
    }
    &__desktop--routes {
      display: none;
    }
    &__mobile--routes {
      position: absolute;
      display: flex;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      background: $background-color-primary;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2em;
      font-size: 2em;
      transform: translateY(-100%);
      transition: transform 0.3s ease;

      &--is-open {
        transform: translateY(0);
      }
    }
  }
}
@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>
