<template>
  <Navbar class="mb-12" />

  <section class="max-w-screen-xl m-auto px-10">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
});
</script>
