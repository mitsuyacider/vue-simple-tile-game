import { LEVEL1_COLOR, LEVEL2_COLOR, LEVEL3_COLOR } from './colors';
import { LEVEL1_GRID, LEVEL2_GRID, LEVEL3_GRID } from './grids';

import { Game, CharTileProps } from './types';

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
      isFinalLevel: true,
    },
  ],
};

export const GAME_START: Game = {
  level: 1,
  tileColor: {
    correct: '#ff0000',
    wrong: '#000000',
  },
  grid: {
    rows: 2,
    cols: 2,
  },
};

export const START_TILES: CharTileProps[] = [
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: false,
    text: 'Welcome to Game of Colors!',
  },
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: false,
    text:
      'This is a single-page JavaScript application that displays a matrix of colored tiles.',
  },
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: true,
    text: 'Select this tile to play game',
  },
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: false,
    text:
      'If you click on the correct tile, the game continues, and you progresses to the next level of difficulty. If you click on the wrong tile, the game ends.',
  },
];

export const END_TILES: CharTileProps[] = [
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: false,
    text: 'Game End',
  },
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: true,
    text: 'Go to Home',
  },
  {
    color: {
      correct: '#ff0000',
      wrong: '#000000',
    },
    isCorrect: true,
    text: 'Play Game',
  },
];
