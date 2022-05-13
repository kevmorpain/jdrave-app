<template>
  <nav class="navbar">
    <ul>
      <router-link
        v-for="{ name, text } in filteredLinks"
        custom
        :to="{ name }"
        :key="name"
        v-slot="{ navigate }"
      >
        <li @click="navigate">{{ text }}</li>
      </router-link>
    </ul>

    <div v-if="!auth.loading">
      <BaseButton v-if="auth.isAuthenticated" @click="logout">
        Se déconnecter
      </BaseButton>
      <BaseButton v-else @click="login">Se connecter</BaseButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useAuth } from '@/plugins/auth';
import { apolloClient, updateApolloClientHeaders } from '@/plugins/apollo';

const links = ref([
  {
    name: 'home',
    text: 'Accueil',
    needAuth: false,
  },
  {
    name: 'games',
    text: 'Jeux',
    needAuth: true,
  },
]);

const auth = useAuth();
const login = () => {
  auth.loginWithRedirect();
};

const filteredLinks = computed(() => {
  if (auth.isAuthenticated) {
    return links.value;
  } else {
    return links.value.filter(link => link.needAuth === false);
  }
});

const logout = () => {
  auth.logout({
    returnTo: window.location.origin,
  });
};

watch(
  () => auth.isAuthenticated,
  async () => {
    if (auth.isAuthenticated) {
      console.log('update token');
      const token = await auth.getTokenSilently();
      updateApolloClientHeaders(token);
      apolloClient.resetStore();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.navbar {
  @apply flex justify-between items-center border-b bg-primary text-white py-4 px-16;

  ul {
    @apply flex m-0;

    li {
      @apply m-0 hover:cursor-pointer py-2 px-4 hover:text-secondary transition-colors duration-200 ease-out;
    }
  }
}
</style>
