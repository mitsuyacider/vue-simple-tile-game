import { ref, watch, reactive, onMounted } from 'vue';
import { fetchGameData } from '@/packages/api';
import { Game, TileProps, GAME_START } from '@/packages/data';

export const useGameConfig = () => {
  const game = ref<Game | null>(null);
  const startGame = ref<Game>(GAME_START);
  const tiles = reactive<TileProps[]>([]);
  const gameLevel = ref<number>(1);

  const getGameData = async () => {
    game.value = null;
    game.value = await fetchGameData(gameLevel.value);
  };

  onMounted(getGameData);

  // NOTE: When game level has changed, get next game data.
  watch(gameLevel, getGameData);

  return {
    game,
    tiles,
    gameLevel,
    startGame,
  };
};
