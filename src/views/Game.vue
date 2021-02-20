<template>
  <div class="game-level">Level: {{ gameLevel }}</div>

  <div class="grid-container">
    <div class="loading" v-if="!game || !tiles">
      Loading...
    </div>

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

// Components
import { TileGrid, Tile } from '@/components/tile-grid';

// Composables
import { useTileAction } from '@/composables/useTileAction';
import { useGameConfig } from '@/composables/useGameConfig';
import { useTileGenerator } from '@/composables/useTileGenerator';

export default defineComponent({
  name: 'Game',
  components: { TileGrid, Tile },
  setup() {
    // NOTE: Reactive values

    const tileSize = ref<number>(0);
    const gridRef = ref<HTMLElement | null>(null);
    const { game, gameLevel } = useGameConfig();

    // NOTE: Composables
    const { handleTileClick } = useTileAction(game, gameLevel);
    const { tiles, generateTiles, calcTileSize } = useTileGenerator();

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
      if (!gridRef.value || !game.value) return;

      generateTiles(game.value);
      tileSize.value = calcTileSize(getGridElement(), game.value!.grid.cols);
    });

    onMounted(() => {
      if (game.value) {
        tileSize.value = calcTileSize(getGridElement(), game.value!.grid.cols);
      }
    });

    return {
      game,
      gridRef,
      tiles,
      tileSize,
      handleTileClick,
      gameLevel,
    };
  },
});
</script>

<style scoped>
.loading {
  position: absolute;
  background: rgba(255, 255, 255, 1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  min-height: 300px;
}

.grid-container {
  position: relative;
}

.game-level {
  text-align: center;
}
</style>
