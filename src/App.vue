<template>
  <div>
    <TileGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TileGrid from '@/components/TileGrid.vue';

export default defineComponent({
  name: 'App',
  components: { TileGrid },
});
</script>

<style></style>
