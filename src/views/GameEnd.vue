<template>
  <div class="game-end">
    <div class="tile-grid" ref="gridRef">
      <CharTile :tile="tiles[0]" />

      <!-- Go to home -->
      <router-link to="/">
        <CharTile :tile="tiles[1]" class="tile--highlight" />
      </router-link>

      <!-- Go to game play page -->
      <router-link to="/game">
        <CharTile :tile="tiles[2]" class="tile--highlight" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CharTile } from '@/components/tile-grid';
import { CharTileProps, END_TILES } from '@/packages/data';

export default defineComponent({
  name: 'GameEnd',
  components: { CharTile },
  setup() {
    const tiles = ref<CharTileProps[]>(END_TILES);

    return { tiles };
  },
});
</script>

<style scoped>
@import '../css/tileGridContainer.css';
@import '../css/tile.css';

.game-end {
  text-align: center;
}

.tile--highlight:hover {
  filter: drop-shadow(0px 1px 4px black);
}
</style>
