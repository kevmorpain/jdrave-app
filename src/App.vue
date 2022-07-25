<template>
  <Component :is="$route.meta.layout ?? DefaultLayout">
    <router-view />
  </Component>
</template>

<script setup lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { apolloClient, updateApolloClientHeaders } from '@/plugins/apollo';
import { useAuth0 } from '@auth0/auth0-vue';
import { ref, watchEffect } from 'vue';

const isRefreshing = ref<boolean>(false);
const updateApp = (e: CustomEvent): void => {
  if (!e.detail || !e.detail.waiting) {
    return;
  }
  e.detail.waiting.postMessage({ type: 'SKIP_WAITING' });
};
document.addEventListener('app-update', updateApp as (e: Event) => void, {
  once: true,
});

// Refresh the app
if (navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!isRefreshing.value) {
      isRefreshing.value = true;
      window.location.reload();
    }
  });
}

const {
  isAuthenticated,
  isLoading,
  getAccessTokenSilently,
  error,
} = useAuth0();

watchEffect(() => {
  if (error.value) {
    console.log(error.value);
  }
});

watchEffect(async () => {
  if (!isLoading.value && isAuthenticated.value) {
    const token = await getAccessTokenSilently();
    updateApolloClientHeaders(token);
    apolloClient.resetStore();
  }
});
</script>
