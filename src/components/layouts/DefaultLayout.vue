<template>
  <div class="flex flex-col min-h-screen">
    <Navbar class="fixed z-10 w-full" />

    <section
      class="pb-10 flex-1 mb-auto"
      :class="{
        'max-w-screen-xl mx-auto px-10 default-layout': !$route.meta.fullWidth,
      }"
    >
      <slot />
    </section>

    <footer class="text-center py-2">
      <p class="text-sm text-primary">
        &copy; {{ new Date().getFullYear() }}. Développé par Kévin Morpain
        depuis le confort de son canapé
      </p>
    </footer>
  </div>
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
