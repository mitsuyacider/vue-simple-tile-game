import { Ref } from 'vue';
import { TileProps, TileColor } from '../packages/data';

export const useTileStyle = (tile: Ref<TileProps>) => {
  /**
   * NOTE: Create tile size
   * @param size tile size
   */
  const getTileStyle = (size: number) => {
    const style = {
      width: `${size}px`,
      height: `${size}px`,
    };
    return style;
  };

  /**
   * NOTE: Background color
   */
  const getTileInnerStyle = () => {
    const color: TileColor = tile.value.color;
    const style = {
      background: tile.value.isCorrect ? color.correct : color.wrong,
    };
    return style;
  };

  return {
    getTileStyle,
    getTileInnerStyle,
  };
};
