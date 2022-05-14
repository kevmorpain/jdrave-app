<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layouts/Default.vue';
import { apolloClient, updateApolloClientHeaders } from '@/plugins/apollo';
import { useAuth0 } from '@auth0/auth0-vue';
import { watchEffect } from 'vue';

const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

watchEffect(async () => {
  if (!isLoading.value && isAuthenticated.value) {
    const token = await getAccessTokenSilently();
    updateApolloClientHeaders(token);
    apolloClient.resetStore();
  }
});
</script>
