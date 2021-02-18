<template>
  <div class="tile-grid">
    <Tile v-for="(value, index) in [...Array(10)]" :key="index" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tile from '@/components/Tile.vue';

export default defineComponent({
  components: { Tile },
});
</script>

<style></style>

<style scoped>
.tile-grid::after {
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
  min-width: 300px;
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto;
  background: #e0555b;
  position: relative;
  padding: 5px;
  border: 1px solid #e0555b;

  /* Trim space */
  font-size: 0;
}
</style>
