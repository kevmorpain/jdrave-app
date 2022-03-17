<template>
  <h1>Création de personnage</h1>

  <div>
    <div>
      <label>Nom</label>
      <input v-model="newCharacter.name" />
    </div>

    <div>
      <label>PV max</label>
      <input v-model="newCharacter.maxHp" type="number" min="0" />
    </div>

    <div>
      <label>PM max</label>
      <input v-model="newCharacter.maxMp" type="number" min="0" />
    </div>

    <div>
      <label>Features</label>
      <textarea v-model="newCharacter.features" />
    </div>

    <button @click="createCharacter">Valider</button>
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
