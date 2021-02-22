import { Ref } from 'vue';
import { TileProps, StartTileProps } from '../packages/data';
import { Game } from '@/packages/data';

import router from '@/router';

export const useTileAction = (
  game: Ref<Game | null>,
  gameLevel: Ref<number>,
) => {
  /**
   * NOTE: When a tile on game page is cliced, do page transition or progress game.
   * @param tile
   */
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
        gameLevel.value += 1;
      }
    }
  };

  /**
   * NOTE: When start tile is clicked, go to game page
   * @param tile
   */
  const handleStartTileClick = (tile: StartTileProps) => {
    if (!game) return;

    if (tile.isCorrect) {
      // NOTE: Go to game start page.
      router.push('/game');
    }
  };
  return {
    handleTileClick,
    handleStartTileClick,
  };
};
