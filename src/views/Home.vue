<template>
  <div class="home">
    <div class="grid-container">
      <TileGrid :game="startGame" ref="gridRef">
        <template #game-tile>
          <CharTile
            v-on:clickTile="handleStartTileClick"
            v-for="(value, index) in tiles"
            :key="index"
            :tileSize="tileSize"
            :tile="value"
            :class="{ clickable: value.isCorrect }"
          />
        </template>
      </TileGrid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, onMounted } from 'vue';
import { TileGrid, CharTile } from '@/components/tile-grid';
import { useTileAction } from '@/composables/useTileAction';
import { useGameConfig } from '@/composables/useGameConfig';
import { useTileGenerator } from '@/composables/useTileGenerator';
import { useWindowResize } from '@/composables/useWindowResize';
import { useGridElement } from '@/composables/useGridElement';
import { TileProps, START_TILES } from '@/packages/data';

export default defineComponent({
  name: 'Home',
  components: { TileGrid, CharTile },
  setup() {
    // NOTE: Reactive values
    const tileSize = ref<number>(0);
    const gridRef = ref<HTMLElement | null>(null);
    const { startGame, gameLevel } = useGameConfig();
    const { windowWidth } = useWindowResize();
    const tiles = ref<TileProps[]>(START_TILES);

    // NOTE: Composables
    const { handleStartTileClick } = useTileAction(startGame, gameLevel);
    const { generateTiles, calcTileSize } = useTileGenerator();
    const { getGridElement } = useGridElement(gridRef);

    // NOTE: Resize tile size when window size has changed
    watch(windowWidth, () => {
      if (!gridRef.value || !startGame.value) return;
      tileSize.value = calcTileSize(
        getGridElement(),
        startGame.value.grid.cols,
      );
    });

    onMounted(() => {
      generateTiles(startGame.value);
      tileSize.value = calcTileSize(
        getGridElement(),
        startGame.value.grid.cols,
      );
    });

    return {
      startGame,
      gridRef,
      tiles,
      tileSize,
      handleStartTileClick,
    };
  },
});
</script>

<style scoped>
@import '../css/tileGridContainer.css';
</style>
