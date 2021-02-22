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
@import '../../css/tile.css';

.tile__inner {
  cursor: pointer;
}
</style>
