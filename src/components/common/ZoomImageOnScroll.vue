<template>
  <div ref="zoomContainer" class="zoom-container">
    <img
      ref="zoomImage"
      :src="imageSrc"
      :alt="imageAlt"
      class="zoom-image"
      :style="{ transform: `scale(${scale})` }"
    />
  </div>
</template>

<script>
export default {
  name: "ZoomOutImageOnScroll",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "Zoom Image",
    },
    initialScale: {
      type: Number,
      default: 2,
    },
    finalScale: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      scale: this.initialScale,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const container = this.$refs.zoomContainer;
      const image = this.$refs.zoomImage;

      if (!container || !image) return;

      const containerRect = container.getBoundingClientRect();

      const visibleHeight = window.innerHeight - containerRect.top;

      if (visibleHeight > 0) {
        const scrollProgress = Math.min(
          visibleHeight / containerRect.height,
          1
        );
        this.scale =
          this.initialScale -
          scrollProgress * (this.initialScale - this.finalScale);
      } else {
        this.scale = this.initialScale;
      }
    },
  },
};
</script>

<style scoped>
.zoom-container {
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.zoom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transition: transform 0.3s ease-out;
}
</style>
