<template>
  <header>
    <h1 class="font-bold text-2xl">
      {{ $t('app.dashboard.title', { name: userName }) }}
    </h1>
  </header>

  <AppCard class="mt-4">
    <div class="flex justify-between items-center mb-4">
      <p class="flex gap-x-2 items-center font-bold text-2xl">
        {{ $t('app.dashboard.online.title') }}
        <!-- <StatusOnlineIcon class="w-6 h-6 text-orange-500" /> -->
      </p>

      <!-- <BaseButton class="secondary small">
        {{ $t('app.dashboard.online.join_action') }}
      </BaseButton> -->
    </div>

    <p>Pas de partie en cours</p>
  </AppCard>

  <AppCard class="mt-4">
    <p class="font-bold text-2xl mb-4">
      {{ $t('app.dashboard.last_drafts.title') }}
    </p>

    <div v-if="lastDrafts.length > 0" class="grid grid-cols-3 gap-x-4">
      <DraftCard
        v-for="entity in lastDrafts"
        :key="entity.id"
        :draft-entity="entity"
        is-clickable
      />
    </div>

    <p v-else>Pas de brouillons</p>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from '@/components/app/AppCard.vue';
import DraftCard from '@/components/app/DraftCard.vue';
import { StatusOnlineIcon } from '@heroicons/vue/outline';

import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import GetCurrentUser from '@/services/users/GetCurrentUser.query.gql';
import LastDraftsQuery from '@/services/app/LastDrafts.query.gql';

import IDraftEntity from '@/types/DraftEntity.interface';
import ILastDraftsQuery from '@/types/services/app/LastDraftsQuery.interface';
import IUserQuery from '@/types/services/UserQuery.interface';

const { result } = useQuery<IUserQuery>(GetCurrentUser);
const { result: lastDraftsResult } =
  useQuery<ILastDraftsQuery>(LastDraftsQuery);

const userName = ref<string>('');
const lastDrafts = ref<IDraftEntity[]>([]);

watch(
  () => result.value,
  () => {
    if (result.value?.current_user[0]) {
      userName.value = result.value.current_user[0].username;
    }
  }
);

watch(
  () => lastDraftsResult.value,
  () => {
    if (lastDraftsResult.value) {
      lastDrafts.value = lastDraftsResult.value.last_drafts;
    }
  }
);
</script>
