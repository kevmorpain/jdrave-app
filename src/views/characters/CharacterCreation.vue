<template>
  <header class="flex justify-between align-middle mb-8">
    <h1 class="page-title">Création de <span>personnage</span></h1>
  </header>

  <div>
    <BaseInput class="mb-6" label="Nom" v-model="newCharacter.name" />

    <BaseInput
      class="mb-6"
      label="PV max"
      type="number"
      min="0"
      v-model="newCharacter.maxHp"
    />

    <BaseInput
      class="mb-6"
      label="PV max"
      type="number"
      min="0"
      v-model="newCharacter.maxMp"
    />

    <BaseTextarea
      class="col-span-full mb-6"
      label="Features"
      v-model="newCharacter.features"
    />

    <BaseButton class="primary circled" @click="createCharacter">
      Valider
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';
import InsertCharacter from '@/services/characters/InsertCharacter.gql';
import CharactersFromGame from '@/services/characters/CharactersFromGame.gql';

export default defineComponent({
  name: 'CharacterCreation',
  props: {
    gameId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const newCharacter = reactive({
      name: '',
      features: '{}',
      maxHp: 0,
      maxMp: 0,
    });

    const { mutate: createCharacter, onDone: onCreationDone } = useMutation(
      InsertCharacter,
      () => ({
        variables: {
          gameId: props.gameId,
          ...newCharacter,
        },
        update: (cache, { data: { createCharacter } }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any = cache.readQuery({
            query: CharactersFromGame,
            variables: {
              gameId: props.gameId,
            },
          });
          console.log(createCharacter);
          console.log(data);
          data.characters.push(createCharacter);
          cache.writeQuery({ query: CharactersFromGame, data });
        },
      })
    );

    const router = useRouter();
    onCreationDone(({ data }): void => {
      router.replace({
        name: 'character',
        params: {
          characterId: data.character.id,
        },
      });
    });

    return {
      newCharacter,
      createCharacter,
    };
  },
});
</script>
