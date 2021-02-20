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
.tile-grid::before {
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

.tile-grid {
  /* min-width: 300px; */
  width: 500px;
  /* max-width: 1000px; */
  margin: 0 auto;
  background: #e0555b;
  position: relative;
  padding: 5px;
  border: 1px solid #e0555b;

  /* Trim space */
  font-size: 0;
}

@media screen {
  .tile-grid {
    width: 80vw;
  }
}
</style>
