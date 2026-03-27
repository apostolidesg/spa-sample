<template>
  <div class="critics-block">
    <CriticsBlockItem
      v-for="(critic, index) in criticss"
      :key="index"
      :name="critic.name"
      :content="critic.content"
    />
  </div>
</template>

<script>
import CriticsBlockItem from "./common/CriticsBlockItem.vue";

export default {
  name: "CriticsBlock",
  components: { CriticsBlockItem },
  computed: {
    criticss() {
      return this.$tm('services.testimonials.items');
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/variables" as *;
.critics-block {
  display: flex;
  text-align: center;
  gap: 2em;

  @media (max-width: $breakpoint-laptop) {
    flex-direction: column;
  }
}
</style>
