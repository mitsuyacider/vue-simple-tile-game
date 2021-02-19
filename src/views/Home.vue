<template>
  <div class="home">
    <div>
      <router-link to="/game">Game Start</router-link>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld
  },
});
</script>
