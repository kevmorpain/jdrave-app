<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '@/components/layouts/Default.vue';

export default defineComponent({
  components: {
    Layout,
  },
});
</script>
