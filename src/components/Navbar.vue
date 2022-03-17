<template>
  <nav class="navbar">
    <ul class="flex">
      <router-link
        v-for="{ name, text } in links"
        custom
        :to="{ name }"
        :key="name"
        v-slot="{ navigate }"
      >
        <li @click="navigate">{{ text }}</li>
      </router-link>
    </ul>

    <div v-if="!auth.loading">
      <button v-if="auth.isAuthenticated" @click="logout">
        Se déconnecter
      </button>
      <button v-else @click="login">Se connecter</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useAuth } from '@/plugins/auth';
import apolloClient from '@/api/apollo';

export default defineComponent({
  name: 'CustomNavbar',
  setup() {
    const links = ref([
      {
        name: 'home',
        text: 'Accueil',
      },
      {
        name: 'games',
        text: 'Jeux',
      },
    ]);

    const auth = useAuth();
    const login = () => {
      auth.loginWithRedirect();
    };

    const logout = () => {
      auth.logout({
        returnTo: window.location.origin,
      });
    };

    watchEffect(async () => {
      if (auth.isAuthenticated && !localStorage.getItem('authToken')) {
        const token = await auth.getTokenSilently();
        localStorage.setItem('authToken', token);
        apolloClient.resetStore();
      }
    });

    return {
      links,
      auth,
      login,
      logout,
    };
  },
});
</script>

<style lang="postcss" scoped>
.navbar {
  @apply flex justify-between items-center border-b;
  padding: 1rem 4rem;
  border-bottom: 1px solid gray;

  ul {
    @apply flex m-0;

    li {
      @apply m-0 hover:cursor-pointer;
      padding: 0.5rem 1rem;

      &:hover {
        color: green;
      }
    }
  }
}
</style>
