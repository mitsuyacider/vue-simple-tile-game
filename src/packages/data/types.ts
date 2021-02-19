// NOTE: Tile grid information
export type TileGrid = {
  cols: number;
  rows: number;
};

// NOTE: Tile information
export type TileProps = {
  color: TileColor;
  isCorrect: boolean;
  index: number;
};

// NOTE: Tile color
export type TileColor = {
  correct: string;
  wrong: string;
};

// NOTE: Game config
export type Game = {
  level: number;
  tileColor: TileColor;
  grid: TileGrid;
};
