<template>
  <div>
    <header>
      <h1>Game of Colors</h1>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
header {
  text-align: center;
  min-height: 80px;
}

h1 {
  line-height: 80px;
}
</style>
