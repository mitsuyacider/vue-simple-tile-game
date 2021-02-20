/**
 * NOTE: Calculate tile size based on gird size
 */
export const useTileSizeCalculator = () => {
  /**
   * NOTE: Calculate tile size
   * FIXME: Should change value
   * @param element
   * @param row division
   * @return a tile size
   */
  const calcTileSize = (element: HTMLElement | null, row: number): number => {
    if (!element) return 0;

    const style = window.getComputedStyle(element);
    const width: number =
      parseFloat(element.style.width) || element.clientWidth;
    const padding: number =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const border: number =
      parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    const innerWidth: number = width - padding - border;
    const tileSize: number = Math.floor(innerWidth / row);

    return tileSize;
  };

  return {
    calcTileSize,
  };
};
