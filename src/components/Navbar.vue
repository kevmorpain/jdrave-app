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

    <div v-if="!isLoading">
      <BaseButton v-if="isAuthenticated" @click="handleLogout">
        Se déconnecter
      </BaseButton>
      <BaseButton v-else @click="handleLogin">Se connecter</BaseButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

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

const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

const handleLogin = () => loginWithRedirect();

const filteredLinks = computed(() => {
  if (isAuthenticated.value) {
    return links.value;
  } else {
    return links.value.filter(link => link.needAuth === false);
  }
});

const handleLogout = () =>
  logout({
    returnTo:
      process.env.NODE_ENV === 'production'
        ? 'https://kevmorpain.github.io/jdrave-app'
        : 'http://localhost:8080',
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
