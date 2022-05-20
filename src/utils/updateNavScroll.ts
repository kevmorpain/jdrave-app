import { useElementBounding, useScroll } from '@vueuse/core';
import { computed, ref } from 'vue';

const navRef = ref<HTMLElement | null>(null);
const heroRef = ref<HTMLElement | null>(null);

const { y } = useScroll(document);
const { height: heroHeight } = useElementBounding(heroRef);
const { height: navHeight } = useElementBounding(navRef);

const hasPassedHero = computed<boolean>(
  () => y.value + navHeight.value > heroHeight.value
);

const useNavScroll = () => {
  return {
    heroRef,
    navRef,
    hasPassedHero,
  };
};

export { useNavScroll };
