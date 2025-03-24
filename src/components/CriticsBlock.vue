<template>
  <div class="critics-block">
    <CriticsBlockItem
      v-for="critics in criticss"
      :criticsItem="critics.value"
    />
  </div>
</template>

<script>
import CriticsBlockItem from "./common/CriticsBlockItem.vue";
import { CRITICS_ITEMS } from "../constants/commonConstants";

export default {
  name: "CriticsBlock",
  components: { CriticsBlockItem },
  data() {
    return {
      criticss: CRITICS_ITEMS,
    };
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
