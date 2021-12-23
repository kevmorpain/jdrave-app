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
      <button v-if="auth.isAuthenticated" @click="logout">
        Se déconnecter
      </button>
      <button v-else @click="login">Se connecter</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useAuth } from "@/plugins/auth";
import apolloClient from "@/api/apollo";

export default defineComponent({
  name: "CustomNavbar",
  setup() {
    const links = ref([
      {
        name: "home",
        text: "Accueil"
      },
      {
        name: "games",
        text: "Jeux"
      }
    ]);

    const auth = useAuth();
    const login = () => {
      auth.loginWithRedirect();
    };

    const logout = () => {
      auth.logout({
        returnTo: window.location.origin
      });
    };

    watchEffect(async () => {
      if (auth.isAuthenticated && !localStorage.getItem("authToken")) {
        const token = await auth.getTokenSilently();
        localStorage.setItem("authToken", token);
        apolloClient.resetStore();
      }
    });

    return {
      links,
      auth,
      login,
      logout
    };
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  border-bottom: 1px solid gray;

  ul {
    display: flex;
    margin: 0;

    li {
      margin: 0;
      padding: 0.5rem 1rem;

      &:hover {
        color: green;
        cursor: pointer;
      }
    }
  }
}
</style>
