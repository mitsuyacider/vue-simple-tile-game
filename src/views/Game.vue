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
import { defineComponent, ref, onMounted } from 'vue';
import { TileGrid, Tile } from '@/components/tile-grid';
import { Game, GAMES, TileProps, TileGridProps } from '@/packages/data';
import { useTileSizeCalculator } from '@/composables/useTileSizeCalculator';
import router from '@/router';

export default defineComponent({
  name: 'Game',
  components: { TileGrid, Tile },
  setup() {
    const game: Game = GAMES.results[0];
    const tileSize = ref<number>(0);

    const tiles = ref<TileProps[]>([]);
    const gridRef = ref<HTMLElement | null>(null);
    const grid: TileGridProps = game.grid;

    const { calcTileSize } = useTileSizeCalculator();

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

    const handleTileClick = (tile: TileProps) => {
      if (!tile.isCorrect) {
        // NOTE: Go to game end page.
        router.push('/game-end');
      } else {
        // NOTE: If the user is on a final stage,
        // Go to ending page
        // NOTE: If the user can still progress the game,
        // Step up game level.
      }
    };

    onMounted(() => {
      // NOTE: Get proxy value for tile grid ref
      // Refs: https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity
      const handler = {
        get(target: any, prop: any) {
          return target[prop];
        },
      };
      const proxy = new Proxy(gridRef.value, handler);

      tileSize.value = calcTileSize(proxy.gridRef, grid.cols);
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
