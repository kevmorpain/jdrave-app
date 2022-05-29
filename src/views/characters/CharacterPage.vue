<template>
  <p v-if="loading">Character is loading</p>

  <div
    v-else
    class="md:border rounded-xl md:p-6 grid md:grid-cols-3 gap-y-6 md:gap-6"
  >
    <div class="text-center">
      <img class="rounded w-96 h-96 object-cover" :src="character.picture" />
    </div>

    <div class="md:col-span-2 grid grid-cols-2 gap-6 place-content-start">
      <header class="mb-8 col-span-2">
        <h1 class="page-title" v-html="title" />
      </header>

      <div>
        <h2>PV</h2>
        <p>{{ character.currentHp }}/{{ character.maxHp }}</p>
      </div>

      <div>
        <h2>Stats</h2>
        <p>{{ character.features }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import CharacterQuery from '@/services/characters/Character.query.gql';
import { useFormattedTitle } from '@/utils/title';
import ICharacterQuery from '@/types/services/characters/CharacterQuery.interface';
import ICharacter from '@/types/Character.interface';

const props = defineProps<{
  characterId: string;
}>();

const { result, loading } = useQuery<ICharacterQuery>(CharacterQuery, () => ({
  characterId: props.characterId,
}));

const character = computed<ICharacter>(
  () => result.value?.character ?? ({} as ICharacter)
);
const characterName = computed<string>(() => character.value.name ?? '');

let title = useFormattedTitle(characterName);
</script>
