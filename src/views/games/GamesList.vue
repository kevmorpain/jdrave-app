<template>
  <header class="flex justify-between items-center mb-8">
    <h1 class="page-title mb-8">
      <span>Jeux</span>
    </h1>

    <RouterLink custom :to="{ name: 'new_game' }" v-slot="{ navigate }">
      <BaseButton class="secondary" @click="navigate">
        Créer une campagne
      </BaseButton>
    </RouterLink>
  </header>

  <p v-if="loading">Les jeux sont en train de charger...</p>

  <ul v-else class="grid gap-14 md:grid-cols-3">
    <RouterLink
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
    </RouterLink>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { GET_GAMES } from '@/services/games';
import { useQuery } from '@vue/apollo-composable';
import IcQuest from '@/components/icons/IcQuest.vue';
import IGamesQuery from '@/types/services/games/GamesQuery.interface';
import IGame from '@/types/Game';

const { result, loading } = useQuery<IGamesQuery>(GET_GAMES);
const games = computed<IGame[]>(() => result.value?.games ?? []);
</script>
