import { useTileStyle } from '../useTileStyle';
import { TileProps } from '../../packages/data';
describe('useTileStyle', () => {
  it('should return width/height 100px', () => {
    const tile: TileProps = {
      color: {
        correct: '#ff0000',
        wrong: '#000000',
      },
      isCorrect: false,
    };
    const { getTileStyle } = useTileStyle(tile);
    const style = getTileStyle(100);

    expect(style).toEqual({ height: '100px', width: '100px' });
  });
});
