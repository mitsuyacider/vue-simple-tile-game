import { LEVEL1_COLOR, LEVEL2_COLOR, LEVEL3_COLOR } from './colors';
import { LEVEL1_GRID, LEVEL2_GRID, LEVEL3_GRID } from './grids';

import { Game } from './types';

type GamesResponse = {
  count: number;
  results: Game[];
};

export const GAMES: GamesResponse = {
  count: 3,
  results: [
    {
      level: 1,
      tileColor: LEVEL1_COLOR,
      grid: LEVEL1_GRID,
    },
    {
      level: 2,
      tileColor: LEVEL2_COLOR,
      grid: LEVEL2_GRID,
    },
    {
      level: 3,
      tileColor: LEVEL3_COLOR,
      grid: LEVEL3_GRID,
    },
  ],
};
