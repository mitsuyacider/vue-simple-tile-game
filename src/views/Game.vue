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
import { defineComponent, watch, ref, onMounted } from 'vue';

// Components
import { TileGrid, Tile } from '@/components/tile-grid';

// Composables
import { useTileAction } from '@/composables/useTileAction';
import { useGameConfig } from '@/composables/useGameConfig';
import { useTileGenerator } from '@/composables/useTileGenerator';
import { useWindowResize } from '@/composables/useWindowResize';
import { useGridElement } from '@/composables/useGridElement';

export default defineComponent({
  name: 'Game',
  components: { TileGrid, Tile },
  setup() {
    // NOTE: Reactive values
    const tileSize = ref<number>(0);
    const gridRef = ref<HTMLElement | null>(null);
    const { game, gameLevel } = useGameConfig();
    const { windowWidth } = useWindowResize();

    // NOTE: Composables
    const { handleTileClick } = useTileAction(game, gameLevel);
    const { tiles, generateTiles, calcTileSize } = useTileGenerator();
    const { getGridElement } = useGridElement(gridRef);

    // NOTE: Create tile config when game config has changed
    watch(game, () => {
      if (!gridRef.value || !game.value) return;

      generateTiles(game.value);
      tileSize.value = calcTileSize(getGridElement(), game.value!.grid.cols);
    });

    // NOTE: Resize tile size when window size has changed
    watch(windowWidth, () => {
      if (!gridRef.value || !game.value) return;
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
@import '../css/tileGridContainer.css';

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

.game-level {
  text-align: center;
  margin-bottom: 10px;
}
</style>
