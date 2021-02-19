import { useTileStyle } from '../useTileStyle';

describe('useTileStyle', () => {
  it('should return width/height 100px', () => {
    const { getTileStyle } = useTileStyle();
    const style = getTileStyle(100);

    expect(style).toEqual({ height: '100px', width: '100px' });
  });
});
