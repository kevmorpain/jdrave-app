<template>
  <nav class="navbar">
    <ul>
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
      <BaseButton v-if="auth.isAuthenticated" @click="logout">
        Se déconnecter
      </BaseButton>
      <BaseButton v-else @click="login">Se connecter</BaseButton>
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
