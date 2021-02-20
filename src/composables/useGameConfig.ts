import { ref, reactive, onMounted } from 'vue';
import { fetchGameData } from '@/packages/api';
import { Game, TileGridProps, TileProps } from '@/packages/data';

export const useGameConfig = () => {
  const game = ref<Game | null>(null);
  const tiles = reactive<TileProps[]>([]);

  const getGameData = async () => {
    game.value = await fetchGameData(1);

    tiles.splice(-tiles.length);
    const grid: TileGridProps = game.value!.grid;

    // NOTE: Create tile config
    const totalTile = grid.cols * grid.rows;

    // NOTE: Generate correct tile index randomly.
    const correctIndex = Math.floor(Math.random() * totalTile);

    for (let i = 0; i < totalTile; i++) {
      const tile: TileProps = {
        color: game.value!.tileColor,
        isCorrect: correctIndex === i,
        index: i,
      };

      tiles.push(tile);
    }
  };

  onMounted(getGameData);
  //   watch(game, getGameData)
  return {
    game,
    tiles,
  };
};
