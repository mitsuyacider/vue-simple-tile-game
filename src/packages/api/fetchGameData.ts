import { GAMES, Game } from '@/packages/data';

export const fetchGameData = async (level: number): Promise<Game> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(GAMES.results[level - 1]);
    }, 1000);
  });
};
