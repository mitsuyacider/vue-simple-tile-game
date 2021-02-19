<template>
  <div>
    <div id="nav">
      <router-link to="/">Game Start</router-link> |
      <router-link to="/game">Play Game</router-link> |
      <router-link to="/game-end">Game End</router-link>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style></style>
