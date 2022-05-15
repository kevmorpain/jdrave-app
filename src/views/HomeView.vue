<template>
  <p v-if="loading">Chargement...</p>

  <div v-else class="-mt-[90px]">
    <div
      class="hero relative bg-center bg-cover h-[300px] md:h-[500px] flex flex-col justify-end before:content-[''] before:absolute before:inset-0 before:bg-primary before:bg-opacity-70 overflow-hidden"
      :style="`background-image: url(${games[0].picture_url})`"
    >
      <div class="max-w-screen-xl mx-auto w-full relative px-8 mb-12 md:mb-4">
        <h1
          class="text-secondary text-3xl md:text-4.5xl font-secondary md:mb-7 flex items-baseline"
        >
          <PrismIcon class="mr-1" />{{ games[0].title
          }}<PrismIcon class="ml-2" />
        </h1>
        <p class="text-white md:text-xl">{{ games[0].description }}</p>
      </div>

      <div
        class="self-end relative flex rounded-tl-md overflow-hidden shadow-hero"
      >
        <p class="bg-tertiary text-sm md:text-lg py-1 px-2.5 md:py-2 md:px-5">
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
