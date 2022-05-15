<template>
  <Navbar class="fixed z-10 w-full" />

  <section
    class="pt-[90px] pb-10"
    :class="{ 'max-w-screen-xl mx-auto px-10': !$route.meta.fullWidth }"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>
