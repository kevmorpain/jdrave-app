<template>
  <header class="mb-5">
    <h1 class="font-bold text-2xl mb-4">
      {{ $t('app.objects_list.title') }}
    </h1>

    <div class="flex justify-between items-center gap-x-2">
      <BaseInput
        class="w-full max-w-[400px]"
        type="text"
        :placeholder="$t('app.objects_list.search_placeholder')"
        v-model="searchValue"
      />

      <ul class="flex gap-x-4">
        <li>
          <BaseDropdown
            :placeholder="$t('app.objects_list.filters.kind')"
            :options="filters.kinds"
            v-model="selectedFilters.kind"
          />
        </li>
        <li>
          <BaseDropdown
            :placeholder="$t('app.objects_list.filters.status')"
            :options="filters.statuses"
            v-model="selectedFilters.status"
          />
        </li>
      </ul>
    </div>
  </header>

  <ul class="-mx-9">
    <li class="list bg-gray-100 text-gray-600 uppercase font-semibold text-sm">
      <span>{{ $t('app.objects_list.list.header.name') }}</span>
      <span>{{ $t('app.objects_list.list.header.games') }}</span>
      <span>{{ $t('app.objects_list.list.header.kind') }}</span>
      <span>{{ $t('app.objects_list.list.header.status') }}</span>
      <span></span>
    </li>

    <RouterLink
      v-for="object in objects"
      :key="object.id"
      custom
      :to="{
        name: 'object_page',
        params: {
          objectId: object.id,
        },
      }"
      v-slot="{ navigate }"
    >
      <li class="list border-b border-gray-200">
        <div class="flex items-center gap-x-6">
          <img
            class="w-12 h-12 object-cover object-center rounded-full bg-gray-200"
            :src="object.picture_url"
          />

          <p class="font-semibold">{{ object.name }}</p>
        </div>

        <div>
          <span
            v-for="{ game } in object.games"
            :key="game.id"
            class="text-primary"
          >
            {{ game.title }}
          </span>
        </div>

        <BaseBadge class="secondary justify-self-start">
          {{ $t(`common.object_kinds.${object.kind}`) }}
        </BaseBadge>

        <BaseBadge class="secondary">{{
          $t(`common.statuses.${object.status}`)
        }}</BaseBadge>

        <div class="ml-auto">
          <BaseButton class="primary small" @click="navigate">
            <PencilIcon class="w-4 h-4" />
            {{ $t('app.objects_list.list.edit_action') }}
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
import ObjectsQuery from '@/services/app/Objects.query.gql';

import IObjectsQuery from '@/types/services/app/ObjectsQuery.interface';
import IObject from '@/types/Object.interface';
import { EObjectKind } from '@/types/ObjectKind.enum';
import { EStatus } from '@/types/Status.enum';

const { t } = useI18n();

const searchValue = ref<string>('');
const selectedFilters = ref<{
  kind: EObjectKind | null;
  status: EStatus | null;
}>({
  kind: null,
  status: null,
});

const filters = ref<{
  kinds: Record<string, string>;
  statuses: Record<string, string>;
}>({
  kinds: Object.entries(EObjectKind)
    .sort((a, b) => a[0].localeCompare(b[0]))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .reduce<Record<string, string>>((list, [_, key]) => {
      list[key] = t(`common.object_kinds.${key}`);

      return list;
    }, {}),
  statuses: Object.entries(EStatus)
    .sort((a, b) => a[0].localeCompare(b[0]))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .reduce<Record<string, string>>((list, [_, key]) => {
      list[key] = t(`common.statuses.${key}`);

      return list;
    }, {}),
});

const { result } = useQuery<IObjectsQuery>(ObjectsQuery, selectedFilters.value);
const objects = computed<IObject[]>(() => result.value?.objects ?? []);
</script>

<style scoped lang="scss">
.list {
  @apply grid items-center gap-x-20 px-9 py-3;
  grid-template-columns: 350px 150px 120px auto 1fr;
}
</style>
