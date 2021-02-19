<template>
  <div>
    <TileGrid :game="game" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TileGrid } from '@/components/tile-grid';
import { Game, GAMES } from '@/packages/data';

export default defineComponent({
  name: 'Game',
  components: { TileGrid },
  setup() {
    const game: Game = GAMES.results[0];

    return {
      game,
    };
  },
});
</script>
