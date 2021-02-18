import { shallowMount } from '@vue/test-utils';
import Tile from '../Tile.vue';

describe('Tile.vue', () => {
  it('should render a tile', () => {
    const wrapper = shallowMount(Tile);
    expect(wrapper).toBeDefined();
  });
});
