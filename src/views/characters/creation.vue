<template>
  <header class="flex justify-between align-middle mb-8">
    <h1 class="page-title" v-html="title" />
  </header>

  <div>
    <BaseInput label="Nom" v-model="newCharacter.name" />

    <BaseInput
      label="PV max"
      type="number"
      min="0"
      v-model="newCharacter.maxHp"
    />

    <BaseInput
      label="PV max"
      type="number"
      min="0"
      v-model="newCharacter.maxMp"
    />

    <BaseTextarea
      class="col-span-full"
      label="Features"
      v-model="newCharacter.features"
    />

    <BaseButton class="primary" @click="createCharacter">Valider</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';
import InsertCharacter from '@/services/characters/InsertCharacter.gql';
import CharactersFromGame from '@/services/characters/CharactersFromGame.gql';
import { useFormattedTitle } from '@/utils/title';

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

    const title = ref<string>('Création de personnage');

    return {
      newCharacter,
      createCharacter,
      title: useFormattedTitle(title),
    };
  },
});
</script>
