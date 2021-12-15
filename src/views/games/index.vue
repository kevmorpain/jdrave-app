<template>
  <h1>Jeux</h1>

  <p v-if="loading">Les jeux sont en train de charger</p>

  <ul v-else>
    <router-link
      tag="li"
      :to="{ name: 'game', params: { gameId: game.id } }"
      v-for="game in games"
      :key="game.id"
    >
      <p>{{ game.title }}</p>
      <p>{{ game.description }}</p>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GET_GAMES } from "@/services/games";
import { useQuery, useResult } from "@vue/apollo-composable";

export default defineComponent({
  name: "Games",
  setup() {
    const { result, loading } = useQuery(GET_GAMES);
    const games = useResult(result, [], data => data.games);

    return {
      loading,
      games
    };
  }
});
</script>
