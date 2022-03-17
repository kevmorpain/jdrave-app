<template>
  <header>
    <h1>{{ character.name }}</h1>
    <button @click="deleteCharacter">Supprimer</button>
  </header>

  <p v-if="loading">Character is loading</p>

  <div v-else>
    <div>
      <label>Nom</label>
      <input v-model="name" />
    </div>
    <div>
      <label>PV</label>
      <input v-model="maxHp" type="number" />
    </div>

    <div>
      <label>Features</label>
      <textarea v-model="features" />
    </div>

    <button @click="updateCharacter">Validate</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { useMutation, useQuery, useResult } from '@vue/apollo-composable';
import CharacterQuery from '@/services/characters/Character.query.gql';
import CharacterMutation from '@/services/characters/Character.mutation.gql';
import DeleteCharacter from '@/services/characters/DeleteCharacter.mutation.gql';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CharacterPage',
  props: {
    characterId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const name = ref<string>('');
    const features = ref<string>('');
    const maxHp = ref<number>(0);

    const { result, loading } = useQuery(CharacterQuery, () => ({
      characterId: props.characterId,
    }));
    const character = useResult(result, {}, data => data.character);

    watchEffect(() => {
      name.value = character.value.name;
      features.value = JSON.stringify(character.value.features);
      maxHp.value = character.value.maxHp;
    });

    const { mutate: updateCharacter } = useMutation(CharacterMutation, () => ({
      variables: {
        characterId: props.characterId,
        name: name.value,
        features: JSON.parse(features.value),
        maxHp: maxHp.value,
      },
    }));

    const { mutate: deleteCharacter, onDone: onDeleteDone } = useMutation(
      DeleteCharacter,
      () => ({
        variables: {
          characterId: props.characterId,
        },
      })
    );

    const router = useRouter();
    onDeleteDone(({ data }): void => {
      router.replace({
        name: 'game',
        params: {
          gameId: data.deleteCharacter.gameId,
        },
      });
    });

    return {
      loading,
      character,
      name,
      features,
      maxHp,
      updateCharacter,
      deleteCharacter,
    };
  },
});
</script>
