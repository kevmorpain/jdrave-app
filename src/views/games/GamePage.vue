<template>
  <header class="mb-8 grid grid-cols-3">
    <h1 class="col-start-2 page-title" v-html="title" />

    <div class="text-right">
      <RouterLink
        custom
        :to="{ name: 'board', params: { gameId } }"
        v-slot="{ navigate }"
      >
        <BaseButton class="secondary circled" @click="navigate">
          Lancer la partie
        </BaseButton>
      </RouterLink>
    </div>
  </header>

  <p v-if="loading">Characters are loading</p>

  <ul v-else class="grid gap-14 md:grid-cols-4">
    <router-link
      v-for="character in sortedCharacters"
      :to="{ name: 'character', params: { characterId: character.id } }"
      :key="character.id"
      custom
      v-slot="{ navigate }"
    >
      <li @click="navigate">
        <article
          class="bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover"
          :style="{ backgroundImage: `url(${character.picture_url})` }"
        >
          <div class="absolute bg-secondary top-0 right-0 p-[2px] rounded-bl">
            <IcCharacter />
          </div>

          <div class="bg-white-opacity py-1 px-4 mt-auto w-full">
            <h1 class="font-bold text-lg">
              {{ character.name }}
            </h1>
          </div>
        </article>
      </li>
    </router-link>
  </ul>
</template>

<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue';

import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useFormattedTitle } from '@/utils/title';
import CharactersFromGame from '@/services/characters/CharactersFromGame.gql';

import IcCharacter from '@/components/icons/IcCharacter.vue';
import ICharactersFromGameResponse from '@/types/services/characters/CharacterFromGame';
import ICharacter from '@/types/Character.interface';

const props = defineProps<{
  gameId: string;
}>();

const { result, loading } = useQuery<ICharactersFromGameResponse>(
  CharactersFromGame,
  () => ({
    gameId: props.gameId,
  })
);

const characters = computed<ICharacter[]>(() => result.value?.characters ?? []);
const gameTitle = computed<string>(() => result.value?.game.title ?? '');

const title = useFormattedTitle(gameTitle);

const sortedCharacters = computed(() =>
  [...characters.value].sort((characterA, characterB) =>
    characterA.name.localeCompare(characterB.name)
  )
);
</script>
