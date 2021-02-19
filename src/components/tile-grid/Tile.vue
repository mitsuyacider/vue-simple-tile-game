<template>
  <div class="tile" :style="getTileStyle(tileSize)">
    <div class="tile__inner" @click="$emit('clickTile')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTileStyle } from '@/composables/useTileStyle';
export default defineComponent({
  emits: ['clickTile'],
  props: {
    tileSize: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const { getTileStyle } = useTileStyle();
    return {
      getTileStyle,
    };
  },
});
</script>

<style scoped>
.tile {
  width: 100px;
  height: 100px;
  display: inline-block;
  z-index: 1;
  position: relative;
  font-size: 12px;
  color: black;
}

.tile__inner {
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  background: black;
  border-radius: 2px;
  margin: 4px;
  display: inline-block;
}
</style>
