<template>
  <div>
    <TileGrid :game="game" ref="gridRef">
      <template #game-tile>
        <Tile
          v-on:clickTile="handleTileClick"
          v-for="(value, index) in tiles"
          :key="index"
          :tileSize="tileSize"
          :tile="value"
        />
      </template>
    </TileGrid>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue';
import { TileGrid, Tile } from '@/components/tile-grid';
import { Game, GAMES, TileProps, TileGridProps } from '@/packages/data';
import { useTileSizeCalculator } from '@/composables/useTileSizeCalculator';
import { useTileAction } from '@/composables/useTileAction';

export default defineComponent({
  name: 'Game',
  components: { TileGrid, Tile },
  setup() {
    const game = ref<Game>(GAMES.results[0]);
    const tileSize = ref<number>(0);
    const tiles = ref<TileProps[]>([]);
    const gridRef = ref<HTMLElement | null>(null);
    const grid: TileGridProps = game.value.grid;

    const { calcTileSize } = useTileSizeCalculator();
    const { handleTileClick } = useTileAction(game);

    // NOTE: Create tile config
    const totalTile = grid.cols * grid.rows;
    for (let i = 0; i < totalTile; i++) {
      const tile: TileProps = {
        color: {
          correct: '#ff3300',
          wrong: '#00ff00',
        },
        isCorrect: !(i % totalTile),
        index: i,
      };

      tiles.value.push(tile);
    }

    const getGridElement = () => {
      // NOTE: Get proxy value for tile grid ref
      // Refs: https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity
      const handler = {
        get(target: any, prop: any) {
          return target[prop];
        },
      };
      const proxy = new Proxy(gridRef.value, handler);
      return proxy.gridRef;
    };

    watchEffect(() => {
      // NOTE: Create tile config
      tiles.value = Object.assign([]);
      const grid: TileGridProps = game.value.grid;

      // NOTE: Create tile config
      const totalTile = grid.cols * grid.rows;
      for (let i = 0; i < totalTile; i++) {
        const tile: TileProps = {
          color: {
            correct: '#ff3300',
            wrong: '#00ff00',
          },
          isCorrect: !(i % totalTile),
          index: i,
        };

        tiles.value.push(tile);
      }

      if (gridRef.value) {
        tileSize.value = calcTileSize(getGridElement(), grid.cols);
      }
    });

    onMounted(() => {
      tileSize.value = calcTileSize(getGridElement(), grid.cols);
    });

    return {
      game,
      gridRef,
      tiles,
      tileSize,
      handleTileClick,
    };
  },
});
</script>

<style scoped>
.hello {
  font-size: 12px;
  color: black;
  background: red;
  display: block;
  position: relative;
  z-index: 1;
}
</style>
