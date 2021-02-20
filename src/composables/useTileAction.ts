import { Ref } from 'vue';
import { TileProps } from '../packages/data';
import { Game } from '@/packages/data';

import router from '@/router';

export const useTileAction = (
  game: Ref<Game | null>,
  gameLevel: Ref<number>,
) => {
  const handleTileClick = (tile: TileProps) => {
    if (!game) return;

    if (!tile.isCorrect) {
      // NOTE: Go to game end page.
      router.push('/game-end');
    } else {
      if (game.value!.isFinalLevel) {
        // NOTE: If the user is on a final stage,
        // Go to ending page
        router.push('/game-end');
      } else {
        // NOTE: If the user can still progress the game,
        // Step up game level.
        // game.value = GAMES.results[game.value!.level];

        // game.value = Object.assign({}, game.value!, {
        //   level: game.value!.level + 1,
        // });
        gameLevel.value += 1;
      }
    }
  };

  return {
    handleTileClick,
  };
};
