<template>
  <p v-if="loading">Character is loading</p>

  <div
    v-else-if="character"
    class="md:border rounded-xl md:p-6 grid md:grid-cols-3 gap-y-6 md:gap-6 relative"
  >
    <div v-if="character.is_npc" class="absolute z-1 top-3 right-0">
      <span class="text-sm bg-secondary text-white px-5 py-0.5 rounded-l">
        PNJ
      </span>
    </div>

    <div class="absolute right-2 top-2 z-1">
      <RouterLink
        custom
        :to="{ name: 'edit_character', params: { characterId: character.id } }"
        v-slot="{ navigate }"
      >
        <BaseButton class="secondary circled" @click="navigate">
          Éditer
          <PencilIcon class="w-4 h-4 ml-1" />
        </BaseButton>
      </RouterLink>
    </div>

    <div class="text-center">
      <img
        class="rounded w-96 h-96 object-cover"
        :src="character.picture_url"
      />
    </div>

    <div class="md:col-span-2 grid grid-cols-2 gap-6 place-content-start">
      <header class="mb-8 col-span-2">
        <h1 class="page-title" v-html="title" />
      </header>

      <div class="col-span-2">
        <p class="whitespace-pre-wrap">{{ character.description }}</p>
      </div>

      <div v-if="!character.is_npc" class="col-span-full">
        <h2 class="font-semibold">PV</h2>
        <p>{{ character.currentHp }}/{{ character.maxHp }}</p>
      </div>

      <div v-if="hasFeatures">
        <h2 class="font-semibold">Stats</h2>
        <p>{{ character.features }}</p>
      </div>

      <div>
        <h2 class="font-semibold">Équipement</h2>

        <ul v-if="character.items?.length" class="mb-6">
          <li v-for="equipment in character.items" :key="equipment.id">
            {{ equipment.name }} ({{ $t(`item_kind.${equipment.kind}`) }}
            {{ equipment.bonus >= 0 ? '+' : '-' }}{{ equipment.bonus }})
            <template v-if="equipment.status"
              >-> {{ equipment.status }}</template
            >
          </li>
        </ul>

        <p v-else class="whitespace-pre-wrap">{{ character.equipment }}</p>
      </div>

      <div>
        <h2 class="font-semibold">Inventaire</h2>
        <p class="whitespace-pre-wrap">{{ character.inventory }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PencilIcon } from '@heroicons/vue/20/solid';

import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { useFormattedTitle } from '@/utils/title';
import CharacterQuery from '@/services/characters/Character.query.gql';

import ICharacterQuery from '@/types/services/characters/CharacterQuery.interface';
import ICharacter from '@/types/Character.interface';

const props = defineProps<{
  characterId: string;
}>();

const { result, loading } = useQuery<ICharacterQuery>(CharacterQuery, () => ({
  characterId: props.characterId,
}));

const character = computed<ICharacter | null>(
  () => result.value?.character ?? null
);
const characterName = computed<string>(() => character.value?.name ?? '');

const title = useFormattedTitle(characterName);

const hasFeatures = computed<boolean>(
  () =>
    !!character.value?.features &&
    !Object.keys(character.value?.features).length
);
</script>
