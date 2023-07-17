<template>
  <div v-if="loading">Chargement...</div>

  <template v-else>
    <AppCard v-if="game">
      <div class="flex gap-4 flex-wrap">
        <div
          class="flex-none max-w-[300px] w-full flex flex-col gap-2 items-center"
        >
          <img
            :src="game.picture_url"
            class="h-[300px] w-full rounded-lg bg-zinc-300 object-cover object-center"
          />

          <BaseButton class="secondary" @click="triggerFileInputFocus">
            {{ $t('app.game_page.update_image_action') }}
          </BaseButton>

          <input
            ref="pictureInputRef"
            class="hidden"
            type="file"
            @change="handlePictureUpload"
          />
        </div>

        <div class="flex-1 flex flex-col gap-4">
          <div class="flex gap-4 flex-wrap">
            <BaseInput
              class="flex-1"
              :label="$t('app.game_page.title')"
              v-model="game.title"
            />

            <BaseSelect
              class="flex-1"
              :label="$t('app.game_page.status')"
              :options="statuses"
              v-model="game.status"
            />

            <div class="flex-1">
              <p>{{ $t('app.game_page.dungeon_master') }}</p>
              <BaseBadge class="primary">
                {{ game.dungeon_master.username }}
              </BaseBadge>
            </div>
          </div>

          <BaseTextarea
            :label="$t('app.game_page.description')"
            v-model="game.description"
          />
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <BaseButton
          class="primary"
          :is-loading="updateLoading"
          @click="handleUpdateGame"
        >
          {{ $t('app.game_page.save_action') }}
        </BaseButton>
      </div>
    </AppCard>

    <div class="mt-4 flex items-start gap-x-4">
      <AppCard class="flex-1">
        <div class="flex justify-between items-center gap-x-4 mb-4">
          <p class="font-bold text-xl">{{ $t('app.game_page.pcs.title') }}</p>

          <BaseButton class="primary small">
            <PlusIcon class="w-4 h-4" />

            {{ $t('app.game_page.pcs.add_action') }}
          </BaseButton>
        </div>

        <ul class="flex flex-col gap-2">
          <li
            v-for="character in pcs"
            :key="character.id"
            class="rounded-lg border border-gray-200 p-2 flex items-center gap-x-2 font-semibold"
          >
            <img
              :src="character.picture_url"
              class="w-20 h-20 rounded object-cover object-center bg-zinc-300"
            />
            {{ character.name }}
          </li>
        </ul>
      </AppCard>

      <AppCard class="flex-1">
        <div class="flex justify-between items-center gap-x-4 mb-4">
          <p class="font-bold text-xl">{{ $t('app.game_page.npcs.title') }}</p>

          <BaseButton class="primary small">
            <PlusIcon class="w-4 h-4" />

            {{ $t('app.game_page.npcs.add_action') }}
          </BaseButton>
        </div>

        <ul class="flex flex-col gap-2">
          <li
            v-for="character in npcs"
            :key="character.id"
            class="rounded-lg border border-gray-200 p-2 flex items-center gap-x-2 font-semibold"
          >
            <img
              :src="character.picture_url"
              class="w-20 h-20 rounded object-cover object-center bg-zinc-300"
            />
            {{ character.name }}
          </li>
        </ul>
      </AppCard>
    </div>
  </template>
</template>

<script setup lang="ts">
import AppCard from '@/components/app/AppCard.vue';
import { PlusIcon } from '@heroicons/vue/20/solid';

import { computed, ref } from 'vue';
import { useCloudinary } from '@/plugins/cloudinary';
import { useI18n } from 'vue-i18n';
import { useMutation, useQuery } from '@vue/apollo-composable';
import GameQuery from '@/services/app/Game.query.gql';
import UpdateGameMutation from '@/services/games/UpdateGame.mutation.gql';

import ICharacter from '@/types/Character.interface';
import IGame from '@/types/Game';
import IGameQuery from '@/types/services/app/GameQuery.interface';
import { ECloudinaryFolder } from '@/plugins/cloudinary';
import { EStatus } from '@/types/Status.enum';

/**
 * TODO:
 * - link add character action to character creation modal with game id prefilled
 */

const { t } = useI18n();

const props = defineProps<{
  gameId: string;
}>();

const { onResult, loading } = useQuery<IGameQuery>(GameQuery, () => ({
  gameId: props.gameId,
}));

const game = ref<IGame | undefined>(undefined);
const statuses = computed<Record<string, string>>(() =>
  Object.entries(EStatus)
    .sort((a, b) => a[0].localeCompare(b[0]))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .reduce<Record<string, string>>((list, [_, key]) => {
      list[key] = t(`common.statuses.${key}`);

      return list;
    }, {})
);
const npcs = ref<ICharacter[]>([]);
const pcs = ref<ICharacter[]>([]);

onResult((result) => {
  if (result.data) {
    game.value = structuredClone(result.data.game);
    npcs.value = structuredClone(result.data.npcs);
    pcs.value = structuredClone(result.data.pcs);
  }
});

const { uploadImage } = useCloudinary();
const pictureInputRef = ref<InstanceType<typeof HTMLInputElement> | null>(null);
const triggerFileInputFocus = (): void => {
  pictureInputRef.value?.click();
};

const handlePictureUpload = async (event: Event): Promise<void> => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (file && game.value) {
    const { url } = await uploadImage(file, ECloudinaryFolder.Games);

    game.value.picture_url = url;
  }
};

const handleUpdateGame = (): void => {
  updateGame();
};

const { mutate: updateGame, loading: updateLoading } = useMutation(
  UpdateGameMutation,
  () => {
    if (game.value) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, title, description, status, picture_url } = game.value;

      return {
        variables: {
          id,
          game: {
            title,
            description,
            status,
            picture_url,
          },
        },
      };
    }

    return {};
  }
);
</script>
