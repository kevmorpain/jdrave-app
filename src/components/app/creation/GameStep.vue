<template>
  <div class="flex flex-col gap-y-4">
    <BaseInput
      :label="$t('app.create_modal.steps.game.fields.title')"
      v-model="newGame.title"
    />

    <BaseTextarea
      :label="$t('app.create_modal.steps.game.fields.description')"
      v-model="newGame.description"
    />
  </div>

  <div class="flex justify-between items-center mt-6 -mx-8 px-4">
    <BaseButton @click="$emit('cancel')">
      {{ $t('app.create_modal.steps.game.actions.cancel') }}
    </BaseButton>

    <BaseButton class="primary" @click="handleCreateClick">
      {{ $t('app.create_modal.steps.game.actions.validate') }}
    </BaseButton>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import CreateGame from '@/services/games/CreateGame.mutation.gql';
import GamesQuery from '@/services/app/Games.query.gql';

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'entity-created'): void;
}>();

const newGame = ref({
  title: '',
  description: '',
});

const handleCreateClick = (): void => {
  createGame();
};

const { mutate: createGame, onDone: onCreationDone } = useMutation(
  CreateGame,
  () => ({
    variables: newGame.value,
    update: (cache, { data: { insert_games_one } }) => {
      let data = cache.readQuery({
        query: GamesQuery,
      });

      data = {
        ...data,
        games: [...data.games, insert_games_one],
      };

      cache.writeQuery({
        query: GamesQuery,
        data,
      });
    },
  })
);

onCreationDone(({ data }) => {
  emit('entity-created');
});
</script>
