<template>
  <div class="footer" :class="themeClass">
    <div class="footer-text">&copy; {{ $t("footer.copyrights") }}</div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "white",
      validator: (value) => ["white", "dark-green"].includes(value),
    },
  },
  computed: {
    themeClass() {
      return `footer-${this.theme}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;

.footer {
  font-size: 0.8em;
  padding: 2em;
  &-text {
    display: flex;
    justify-content: center;
    color: $background-color-primary;
  }
  &-white {
    background-color: $background-color-secondary;
  }
}
</style>
