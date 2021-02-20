import { onMounted, onUnmounted, ref } from 'vue';

export const useWindowResize = () => {
  const windowHeight = ref<number>(0);
  const windowWidth = ref<number>(0);

  function resize() {
    windowHeight.value = window.innerHeight;
    windowWidth.value = window.innerWidth;
  }

  onMounted(() => {
    resize();
    window.addEventListener('resize', resize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });

  return { windowHeight, windowWidth };
};
