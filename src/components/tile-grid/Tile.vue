<template>
  <div class="tile" :style="getTileStyle(tileSize)">
    <div
      class="tile__inner"
      :style="getTileInnerStyle()"
      @click="$emit('clickTile', tile)"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useTileStyle } from '@/composables/useTileStyle';
import { TileProps } from '@/packages/data';

export default defineComponent({
  emits: ['clickTile'],
  props: {
    tileSize: {
      type: Number,
      default: 0,
    },
    tile: {
      type: Object as () => TileProps,
      default: {
        color: {
          correct: '#ff0000',
          wrong: '#000000',
        },
        isCorrect: false,
        index: 0,
      },
    },
  },
  setup(props) {
    const { tile } = toRefs(props);
    const { getTileStyle, getTileInnerStyle } = useTileStyle(tile);

    return {
      getTileStyle,
      getTileInnerStyle,
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
