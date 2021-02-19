import { useTileSizeCalculator } from '../useTileSizeCalculator';

describe('useTileSizeCalculator', () => {
  it('should return 0', () => {
    const element = document.createElement('div');

    const { calcTileSize } = useTileSizeCalculator();
    const size = calcTileSize(element, 3);

    expect(size).toBeFalsy();
  });

  it('should return 98px', async () => {
    const element: HTMLElement = document.createElement('div');
    element.style.width = '300px';
    element.style.height = '300px';
    element.style.padding = '2px';
    element.style.border = '1px';
    element.style.maxWidth = '300px';
    element.style.minWidth = '300px';

    document.body.appendChild(element);

    const { calcTileSize } = await useTileSizeCalculator();
    const size = calcTileSize(element, 3);

    expect(size).toEqual(98);
  });
});
