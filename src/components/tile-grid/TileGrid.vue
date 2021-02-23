<template>
  <div class="tile-grid" ref="gridRef">
    <!-- Game tile -->
    <slot name="game-tile"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const gridRef = ref<HTMLElement | null>(null);

    return {
      gridRef,
    };
  },
});
</script>

<style></style>

<style scoped>
[class*='tile-grid']::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #d7dedf;
}

[class*='tile-grid'] {
  width: 500px;

  margin: 0 auto;
  background: #e0555b;
  position: relative;
  padding: 5px;
  border: 1px solid #e0555b;

  /* Trim space */
  font-size: 0;
}

.tile-grid--fluid-small {
  min-width: 300px;
  width: 30vw;
  max-width: 800px;
}

.tile-grid--fluid-medium {
  min-width: 300px;
  width: 50vw;
  max-width: 800px;
}

.tile-grid--fluid-big {
  min-width: 300px;
  width: 70vw;
  max-width: 800px;
}

.tile-grid--fixed-small {
  width: 300px;
}

.tile-grid--fixed-medium {
  width: 500px;
}

.tile-grid--fixed-big {
  width: 800px;
}

@media only screen and (max-width: 768px) {
  .tile-grid {
    width: 80vw;
  }
}
</style>
