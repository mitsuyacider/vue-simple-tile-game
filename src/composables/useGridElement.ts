import { Ref } from 'vue';

export const useGridElement = (gridRef: Ref<HTMLElement | null>) => {
  const getGridElement = () => {
    // NOTE: Get proxy value for tile grid ref
    // Refs: https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity
    const handler = {
      get(target: any, prop: any) {
        return target[prop];
      },
    };
    const proxy = new Proxy(gridRef.value, handler);
    return proxy.gridRef;
  };

  return {
    getGridElement,
  };
};
