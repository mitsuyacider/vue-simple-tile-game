<template>
  <div class="game-end">
    <div>Game Over</div>
    <div>
      <router-link to="/game">Restart</router-link>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: 'GameEnd',
});
</script>

<style scoped>
.game-end {
  text-align: center;
}
</style>
