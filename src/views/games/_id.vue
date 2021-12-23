<template>
  <header>
    <h1>{{ game.title }}</h1>
    <router-link
      custom
      :to="{ name: 'new_character', params: { gameId: gameId } }"
      v-slot="{ navigate }"
    >
      <button @click="navigate">Créer un personnage</button>
    </router-link>
  </header>

  <p v-if="loading">Characters are loading</p>

  <ul v-else>
    <router-link
      v-for="character in characters"
      :to="{ name: 'character', params: { characterId: character.id } }"
      :key="character.id"
      custom
      v-slot="{ navigate }"
    >
      <li @click="navigate">
        <h2>{{ character.name }}</h2>
      </li>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import CharactersFromGame from "@/services/characters/CharactersFromGame.gql";

export default defineComponent({
  name: "GamePage",
  props: ["gameId"],
  setup(props) {
    const { result, loading } = useQuery(CharactersFromGame, () => ({
      gameId: props.gameId
    }));
    const characters = useResult(result, [], data => data.characters);
    const game = useResult(result, [], data => data.game);

    return {
      loading,
      characters,
      game
    };
  }
});
</script>
