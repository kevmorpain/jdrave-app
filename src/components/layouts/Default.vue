<template>
  <Navbar class="fixed z-10 w-full" />

  <section class="max-w-screen-xl m-auto px-10 pt-[70px]">
    <slot />
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>
