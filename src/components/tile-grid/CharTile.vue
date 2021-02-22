<template>
  <div class="tile" :style="getTileStyle(tileSize)">
    <div
      class="tile__inner"
      :style="getTileInnerStyle()"
      @click="$emit('clickTile', tile)"
    >
      <div class="char-tile">{{ tile.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useTileStyle } from '@/composables/useTileStyle';
import { StartTileProps } from '@/packages/data';

export default defineComponent({
  emits: ['clickTile'],
  props: {
    tileSize: {
      type: Number,
      default: 0,
    },
    tile: {
      type: Object as () => StartTileProps,
      default: {
        color: {
          correct: '#ff0000',
          wrong: '#000000',
        },
        isCorrect: false,
        text: '',
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

.char-tile {
  font-size: 18px;
  color: white;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  padding: 15px;
  transform: translate(-50%, -50%);
  line-height: 20px;
}

.start-link {
  width: 100%;
  height: 100%;
  display: block;
}

@media only screen and (max-width: 768px) {
  .char-tile {
    font-size: 12px;
    line-height: 14px;
  }

  .char-tile a {
    margin: 0 auto;
  }
}
</style>
