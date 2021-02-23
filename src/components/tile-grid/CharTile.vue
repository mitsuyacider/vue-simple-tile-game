<template>
  <Tile
    :tileSize="tileSize"
    :tile="tile"
    v-on:clickTile="$emit('clickTile', tile)"
  >
    <template #char-tile>
      <div class="char-tile">{{ tile.text }}</div>
    </template>
  </Tile>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CharTileProps } from '@/packages/data';
import { Tile } from '@/components/tile-grid';

export default defineComponent({
  emits: ['clickTile'],
  props: {
    tileSize: {
      type: Number,
      default: 100,
    },
    tile: {
      type: Object as () => CharTileProps,
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
  components: { Tile },
});
</script>
