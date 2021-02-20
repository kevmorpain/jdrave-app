<template>
  <div class="home">
    <h1>Home</h1>

    <div>
      <div v-if="!auth.loading">
        <button v-if="auth.isAuthenticated" @click="logout">Log out</button>
        <button v-else @click="login">Log in</button>
      </div>

      <router-link v-if="auth.isAuthenticated" :to="{ name: 'profile' }"
        >Profil</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth } from "@/plugins/auth";
// import gql from "graphql-tag";
// import { useQuery } from "@vue/apollo-composable";

// const GET_GAMES = gql`
//   query getGames {
//     games {
//       id
//       title
//       description
//     }
//   }
// `;

export default defineComponent({
  name: "Home",
  setup() {
    // const { result } = useQuery(GET_GAMES);
    // console.log(result);

    const auth = useAuth();

    const login = () => {
      auth.loginWithRedirect();
    };
    const logout = () => {
      auth.logout({
        returnTo: window.location.origin
      });
    };

    return {
      login,
      logout,
      auth
    };
  }
});
</script>
