<template>
  <div class="app-layout grid min-h-screen font-app">
    <AppSidebar />

    <section
      class="px-9 py-8"
      :class="{
        'bg-white': $route.meta.isLayoutList,
      }"
    >
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/app/AppSidebar.vue';
</script>

<style scoped>
.app-layout {
  grid-template-columns: 250px 1fr;
  background-color: #f3f0f4;
}
</style>
