import { reactive } from 'vue';
import { Game, TileGridProps, TileProps } from '@/packages/data';

export const useTileGenerator = () => {
  // NOTE: Tile data reference
  const tiles = reactive<TileProps[]>([]);

  /**
   * NOTE: Calculate tile size
   * FIXME: Should change value
   * @param element
   * @param cols division
   * @return a tile size
   */
  const calcTileSize = (element: HTMLElement | null, cols: number): number => {
    if (!element) return 0;

    const style = window.getComputedStyle(element);
    const width: number =
      parseFloat(element.style.width) || element.clientWidth;

    const padding: number =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const border: number =
      parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    const innerWidth: number = width - padding - border;
    const tileSize: number = innerWidth / cols;

    return tileSize;
  };

  /**
   * NOTE: Create tiles along with current game data
   * @param game game data
   */
  const generateTiles = (game: Game) => {
    tiles.splice(-tiles.length);
    const grid: TileGridProps = game.grid;

    // NOTE: Create tile config
    const totalTile = grid.cols * grid.rows;

    // NOTE: Generate correct tile index randomly.
    const correctIndex = Math.floor(Math.random() * totalTile);

    for (let i = 0; i < totalTile; i++) {
      const tile: TileProps = {
        color: game.tileColor,
        isCorrect: correctIndex === i,
      };

      tiles.push(tile);
    }
  };

  return {
    tiles,
    calcTileSize,
    generateTiles,
  };
};
