<template>
  <Navbar class="fixed z-10 w-full" />

  <section
    class="pb-10"
    :class="{
      'max-w-screen-xl mx-auto px-10 default-layout': !$route.meta.fullWidth,
    }"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped lang="scss">
.default-layout {
  --nav-width: 73px;
  padding-top: calc(var(--nav-width) + 2rem);
}
</style>
