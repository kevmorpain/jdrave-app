<template>
  <header class="flex justify-between align-middle mb-8">
    <h1 class="page-title">Création de <span>campagne</span></h1>
  </header>

  <div>
    <BaseInput class="mb-6" label="Titre" v-model="newGame.title" />

    <BaseTextarea
      class="col-span-full mb-6"
      label="Description"
      v-model="newGame.description"
    />

    <BaseButton class="primary circled" @click="createGame">Valider</BaseButton>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';
import CreateGame from '@/services/games/CreateGame.mutation.gql';
import { GET_GAMES } from '@/services/games';

const newGame = reactive<{
  title: string;
  description: string;
}>({
  title: '',
  description: '',
});

const { mutate: createGame, onDone: onCreationDone } = useMutation(
  CreateGame,
  () => ({
    variables: {
      ...newGame,
    },
    update: (cache, { data: { createGame } }) => {
      const data = cache.readQuery({
        query: GET_GAMES,
      });
      data.characters.push(createGame);
      cache.writeQuery({ query: GET_GAMES, data });
    },
  })
);

const router = useRouter();
onCreationDone(({ data }): void => {
  router.replace({
    name: 'game',
    params: {
      gameId: data.game.id,
    },
  });
});
</script>
