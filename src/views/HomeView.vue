<template>
  <Navbar class="fixed z-10 w-full mb-12" />

  <p v-if="loading">Chargement...</p>

  <template v-else>
    <div
      class="hero relative bg-center bg-cover h-[500px] flex flex-col justify-end pb-10 before:content-['e'] before:absolute before:inset-0 before:bg-primary before:bg-opacity-70"
      :style="`background-image: url(${games[0].picture_url})`"
    >
      <div class="max-w-hero w-full mx-auto relative z-1">
        <h1
          class="text-secondary text-4.5xl font-secondary mb-7 flex items-baseline"
        >
          <PrismIcon class="mr-1" />{{ games[0].title }}<PrismIcon class="ml-2" />
        </h1>
        <p class="text-white text-xl">{{ games[0].description }}</p>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import PrismIcon from '@/components/icons/PrismIcon.vue';
import { GET_GAMES } from '@/services/games';
import { useQuery, useResult } from '@vue/apollo-composable';
import IGamesQuery from '@/types/services/games/GamesQuery.interface';

const { result, loading } = useQuery<IGamesQuery>(GET_GAMES);
const games = useResult(result, [], data => data.games);
</script>
