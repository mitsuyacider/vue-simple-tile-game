// NOTE: Tile grid information
export type TileGridProps = {
  cols: number;
  rows: number;
};

// NOTE: Tile information
export type TileProps = {
  color: TileColor;
  isCorrect: boolean;
};

export type StartTileProps = TileProps & {
  text: string;
  title?: string;
};

// NOTE: Tile color
export type TileColor = {
  correct: string;
  wrong: string;
};

// NOTE: Game config
export type Game = {
  level: number;
  isFinalLevel?: boolean;
  tileColor: TileColor;
  grid: TileGridProps;
};
