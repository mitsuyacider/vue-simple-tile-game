import { shallowMount } from '@vue/test-utils';
import TileGrid from '../TileGrid.vue';

describe('TileGrid.vue', () => {
  it('should render a tile grid', () => {
    const wrapper = shallowMount(TileGrid);
    expect(wrapper).toBeDefined();
  });
});
