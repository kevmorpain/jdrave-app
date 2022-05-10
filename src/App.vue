<template>
  <Component :is="$route.name === 'home' ? 'div' : Layout">
    <router-view />
  </Component>
</template>

<script setup lang="ts">
import Layout from '@/components/layouts/Default.vue';
</script>
