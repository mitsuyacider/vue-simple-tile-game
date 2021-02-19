<template>
  <div class="tile-grid" ref="gridRef">
    <Tile
      v-on:clickTile="handleTileClick"
      v-for="(value, index) in tiles"
      :key="index"
      :tileSize="tileSize"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onMounted, ref } from 'vue';
import { useTileSizeCalculator } from '@/composables/useTileSizeCalculator';
import { Game, GAMES, TileGrid, TileProps } from '@/packages/data';

import Tile from './Tile.vue';

export default defineComponent({
  components: { Tile },
  props: {
    game: {
      type: Object as () => Game,
      require: true,
      default: GAMES.results[0],
    },
  },
  setup(props) {
    const tileSize = ref<number>(0);
    const gridRef = ref<HTMLElement | null>(null);
    const tiles = ref<TileProps[]>([]);

    const { calcTileSize } = useTileSizeCalculator();
    const { game } = toRefs(props);
    const grid: TileGrid = game.value.grid;

    // NOTE: Create tile config
    const totalTile = grid.cols * grid.rows;
    for (let i = 0; i < totalTile; i++) {
      const tile: TileProps = {
        color: '#ff0000',
        isCorrect: false,
        index: i,
      };

      tiles.value.push(tile);
    }

    const handleTileClick = () => {
      console.log('handle tile click');
    };

    onMounted(() => {
      tileSize.value = calcTileSize(gridRef.value, grid.cols);
    });

    return {
      handleTileClick,
      gridRef,
      tileSize,
      tiles,
    };
  },
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
</style>
