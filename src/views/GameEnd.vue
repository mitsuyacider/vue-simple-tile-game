<template>
  <div class="game-end">
    <div class="tile-grid" ref="gridRef">
      <div class="tile">
        <div class="tile__inner tile-inner--disabled">
          <div class="char-tile">Game End</div>
        </div>
      </div>

      <!-- Go to home -->
      <router-link to="/">
        <div class="tile tile--highlight">
          <div class="tile__inner">
            <div class="char-tile">
              Go to Home
            </div>
          </div>
        </div>
      </router-link>

      <!-- Go to game play page -->
      <router-link to="/game">
        <div class="tile tile--highlight">
          <div class="tile__inner">
            <div class="char-tile">
              Restart Game
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameEnd',
});
</script>

<style scoped>
@import '../css/tileGridContainer.css';
@import '../css/tile.css';

.game-end {
  text-align: center;
}

.tile--highlight .tile__inner {
  background: #ff0000;
}

.tile--highlight:hover {
  filter: drop-shadow(0px 3px 4px #ff1200);
}
</style>
