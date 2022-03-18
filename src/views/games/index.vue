<template>
  <h1 class="page-title mb-8">
    <span>Jeux</span>
  </h1>

  <p v-if="loading">Les jeux sont en train de charger...</p>

  <ul v-else class="grid gap-14 grid-cols-3">
    <router-link
      :to="{ name: 'game', params: { gameId: game.id } }"
      v-for="game in games"
      :key="game.id"
      custom
      v-slot="{ navigate }"
    >
      <li @click="navigate">
        <article
          class="bg-white rounded shadow-md p-3 hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden"
        >
          <div class="absolute bg-secondary top-0 right-0 p-[2px] rounded-bl">
            <IcQuest />
          </div>

          <h1 class="font-bold text-lg">{{ game.title }}</h1>
          <p>{{ game.description }}</p>
        </article>
      </li>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GET_GAMES } from '@/services/games';
import { useQuery, useResult } from '@vue/apollo-composable';
import IcQuest from '@/components/icons/IcQuest.vue';

export default defineComponent({
  name: 'GamesList',
  components: {
    IcQuest,
  },
  setup() {
    const { result, loading } = useQuery(GET_GAMES);
    const games = useResult(result, [], data => data.games);

    return {
      loading,
      games,
    };
  },
});
</script>
