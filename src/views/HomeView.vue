<template>
  <p v-if="loading">Chargement...</p>

  <div v-else class="-mx-10 -mt-[70px]">
    <div
      class="hero relative bg-center bg-cover h-[500px] flex flex-col justify-end before:content-[''] before:absolute before:inset-0 before:bg-primary before:bg-opacity-70 overflow-hidden"
      :style="`background-image: url(${games[0].picture_url})`"
    >
      <div class="w-full mx-[243px] relative">
        <h1
          class="text-secondary text-4.5xl font-secondary mb-7 flex items-baseline"
        >
          <PrismIcon class="mr-1" />{{ games[0].title
          }}<PrismIcon class="ml-2" />
        </h1>
        <p class="text-white text-xl">{{ games[0].description }}</p>
      </div>

      <div
        class="self-end relative flex rounded-tl-md overflow-hidden shadow-hero"
      >
        <p class="bg-tertiary text-lg py-2 px-5">
          {{
            format(new Date(games[0].created_at), 'dd MMMM yyyy', {
              locale: fr,
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PrismIcon from '@/components/icons/PrismIcon.vue';
import { GET_GAMES } from '@/services/games';
import { useQuery, useResult } from '@vue/apollo-composable';
import IGamesQuery from '@/types/services/games/GamesQuery.interface';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const { result, loading } = useQuery<IGamesQuery>(GET_GAMES);
const games = useResult(result, [], data => data.games);
</script>
