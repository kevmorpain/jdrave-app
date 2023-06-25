<template>
  <header class="mb-5">
    <h1 class="font-bold text-2xl mb-4">
      {{ $t('app.campaigns_list.title') }}
    </h1>

    <div class="flex justify-between items-center gap-x-2">
      <BaseInput class="w-full max-w-[400px]" type="text" :placeholder="$t('app.campaigns_list.search_placeholder')" v-model="searchValue" />

      <ul class="flex gap-x-4">
        <li>
          <BaseDropdown :placeholder="$t('app.campaigns_list.filters.dungeon_master')" :options="filters.dungeonMasters" v-model="selectedFilters.dungeonMasterId" />
        </li>
        <li>
          <BaseDropdown :placeholder="$t('app.campaigns_list.filters.status')" :options="filters.statuses" v-model="selectedFilters.status" />
        </li>
      </ul>
    </div>
  </header>

  <ul class="-mx-9">
    <li class="list bg-gray-100 text-gray-600 uppercase font-semibold text-sm">
      <span class="">{{ $t('app.campaigns_list.list.header.title') }}</span>
      <span class="">{{ $t('app.campaigns_list.list.header.dungeon_master') }}</span>
      <span class="">{{ $t('app.campaigns_list.list.header.last_game') }}</span>
      <span class="">{{ $t('app.campaigns_list.list.header.status') }}</span>
      <span class=""></span>
    </li>

    <li v-for="game in games" :key="game.id" class="list border-b border-gray-200">
      <div>
        <p class="font-semibold">{{ game.title }}</p>
        <p class="text-sm text-dark-light truncate">{{ game.description }}</p>
      </div>
      <span>{{ game.dungeon_master.username }}</span>
      <span>{{ game.updated_at && $d(new Date(game.updated_at)) }}</span>
      <BaseBadge class="secondary">{{ $t(`common.statuses.${game.status}`) }}</BaseBadge>

      <div class="ml-auto">
        <BaseButton class="primary small">
          <PencilIcon class="w-4 h-4" />
          {{ $t('app.campaigns_list.list.edit_action') }}
        </BaseButton>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PencilIcon } from '@heroicons/vue/20/solid';

import { computed, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable';
import GamesQuery from '@/services/app/Games.query.gql'

import IGame from '@/types/Game';
import IGamesQuery from '@/types/services/app/GamesQuery.interface';
import { EStatus } from '@/types/Status.enum';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const searchValue = ref<string>('')
const selectedFilters = ref<{
  dungeonMasterId: string | null
  status: EStatus | null
}>({
  dungeonMasterId: null,
  status: null,
})

const filters = ref<{
  dungeonMasters: Record<string, string>
  statuses: Record<string, string>
}>({
  dungeonMasters: {},
  statuses: Object.entries(EStatus)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce<Record<string, string>>((list, [_, key]) => {
      list[key] = t(`common.statuses.${key}`)

      return list
    }, {})
})

const { result, onResult } = useQuery<IGamesQuery>(GamesQuery, selectedFilters.value)
const games = computed<IGame[]>(() => result.value?.games ?? [])

onResult(({ data }) => {
  filters.value.dungeonMasters = [...data.dungeon_masters]
    .sort((a, b) => a.username.localeCompare(b.username))
    .reduce<Record<string, string>>((list, dm) => {
      list[dm.id] = dm.username

      return list
    }, {})
})
</script>

<style scoped lang="scss">
.list {
  @apply grid items-center gap-x-20 px-9 py-3;
  grid-template-columns:350px 150px 120px auto 1fr;
}
</style>
