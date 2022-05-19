<template>
  <h1 class="page-title mb-8">
    <span>Personnages</span>
  </h1>

  <p v-if="loading">Les personnages sont en train de charger...</p>

  <ul v-else class="grid gap-14 md:grid-cols-4">
    <RouterLink
      v-for="character in characters"
      :to="{ name: 'character', params: { characterId: character.id } }"
      :key="character.id"
      custom
      v-slot="{ navigate }"
    >
      <li @click="navigate">
        <article
          class="bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover"
          :style="{ backgroundImage: `url(${character.picture})` }"
        >
          <div class="absolute bg-secondary top-0 right-0 p-[2px] rounded-bl">
            <CharacterIcon />
          </div>

          <div class="bg-white-opacity py-1 px-4 mt-auto w-full">
            <h1 class="font-bold text-lg">
              {{ character.name }}
            </h1>
          </div>
        </article>
      </li>
    </RouterLink>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import GetCharactersQuery from '@/services/characters/GetCharacters.query.gql';
import { useQuery } from '@vue/apollo-composable';
import ICharactersQuery from '@/types/services/characters/CharactersQuery.interface';
import ICharacter from '@/types/Character.interface';
import CharacterIcon from '@/components/icons/IcCharacter.vue';

const { result, loading } = useQuery<ICharactersQuery>(GetCharactersQuery);
const characters = computed<ICharacter[]>(() => result.value?.characters ?? []);
</script>
