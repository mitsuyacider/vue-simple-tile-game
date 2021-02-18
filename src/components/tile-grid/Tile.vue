<template>
  <div class="tile">
    <div class="tile__inner" @click="$emit('clickTile')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['clickTile'],
});
</script>

<style scoped>
.tile {
  width: 100px;
  height: 100px;
  display: inline-block;
  z-index: 1;
  position: relative;
  font-size: 12px;
  color: black;
}

.tile__inner {
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  background: black;
  border-radius: 2px;
  margin: 4px;
  display: inline-block;
}
</style>
