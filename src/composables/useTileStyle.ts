export const useTileStyle = () => {
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

  return {
    getTileStyle,
  };
};
