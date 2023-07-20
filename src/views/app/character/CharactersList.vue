<template>
  <header class="mb-5">
    <h1 class="font-bold text-2xl mb-4">
      {{ $t('app.characters_list.title') }}
    </h1>

    <div class="flex justify-between items-center gap-x-2">
      <BaseInput
        class="w-full max-w-[400px]"
        type="text"
        :placeholder="$t('app.characters_list.search_placeholder')"
        v-model="searchValue"
      />

      <ul class="flex gap-x-4">
        <li>
          <BaseDropdown
            :placeholder="$t('app.characters_list.filters.game')"
            :options="filters.games"
            v-model="selectedFilters.gameId"
          />
        </li>
        <li>
          <BaseDropdown
            :placeholder="$t('app.characters_list.filters.status')"
            :options="filters.statuses"
            v-model="selectedFilters.status"
          />
        </li>
      </ul>
    </div>
  </header>

  <ul class="-mx-9">
    <li class="list bg-gray-100 text-gray-600 uppercase font-semibold text-sm">
      <span>{{ $t('app.characters_list.list.header.name') }}</span>
      <span>{{ $t('app.characters_list.list.header.game') }}</span>
      <span>{{ $t('app.characters_list.list.header.status') }}</span>
      <span></span>
    </li>

    <RouterLink
      v-for="character in characters"
      :key="character.id"
      custom
      :to="{
        name: 'character_page',
        params: {
          characterId: character.id,
        },
      }"
      v-slot="{ navigate }"
    >
      <li class="list border-b border-gray-200">
        <div>
          <p class="font-semibold">{{ character.name }}</p>
        </div>
        <span>{{ character.game.title }}</span>
        <BaseBadge class="secondary justify-self-start">{{
          $t(`common.statuses.${character.status}`)
        }}</BaseBadge>

        <div class="ml-auto">
          <BaseButton class="primary small" @click="navigate">
            <PencilIcon class="w-4 h-4" />
            {{ $t('app.characters_list.list.edit_action') }}
          </BaseButton>
        </div>
      </li>
    </RouterLink>
  </ul>
</template>

<script setup lang="ts">
import { PencilIcon } from '@heroicons/vue/20/solid';

import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuery } from '@vue/apollo-composable';
import CharactersQuery from '@/services/app/Characters.query.gql';

import ICharactersQuery from '@/types/services/app/CharactersQuery.interface';
import ICharacterWithGame from '@/types/CharacterWithGame.interface';
import { EStatus } from '@/types/Status.enum';

const { t } = useI18n();

const searchValue = ref<string>('');
const selectedFilters = ref<{
  gameId: string | null;
  status: EStatus | null;
}>({
  gameId: null,
  status: null,
});

const filters = ref<{
  games: Record<string, string>;
  statuses: Record<string, string>;
}>({
  games: {},
  statuses: Object.entries(EStatus)
    .sort((a, b) => a[0].localeCompare(b[0]))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .reduce<Record<string, string>>((list, [_, key]) => {
      list[key] = t(`common.statuses.${key}`);

      return list;
    }, {}),
});

const { result, onResult } = useQuery<ICharactersQuery>(
  CharactersQuery,
  selectedFilters.value
);
const characters = computed<ICharacterWithGame[]>(
  () => result.value?.characters ?? []
);

onResult(({ data }) => {
  if (data) {
    filters.value.games = [...data.games]
      .sort((a, b) => a.title.localeCompare(b.title))
      .reduce<Record<string, string>>((list, game) => {
        list[game.id] = game.title;

        return list;
      }, {});
  }
});
</script>

<style scoped lang="scss">
.list {
  @apply grid items-center gap-x-20 px-9 py-3;
  grid-template-columns: 350px 150px auto 1fr;
}
</style>
