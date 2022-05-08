<template>
  <header class="flex justify-between align-middle mb-8">
    <h1 class="page-title" v-html="title" />

    <router-link
      custom
      :to="{ name: 'new_character', params: { gameId: gameId } }"
      v-slot="{ navigate }"
    >
      <BaseButton class="secondary" @click="navigate">
        Créer un personnage
      </BaseButton>
    </router-link>
  </header>

  <p v-if="loading">Characters are loading</p>

  <ul v-else class="grid gap-14 grid-cols-4">
    <router-link
      v-for="character in sortedCharacters"
      :to="{ name: 'character', params: { characterId: character.id } }"
      :key="character.id"
      custom
      v-slot="{ navigate }"
    >
      <li @click="navigate">
        <article
          class="bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover"
          :style="{ backgroundImage: `url(${character.picture})` }"
        >
          <div class="absolute bg-secondary top-0 right-0 p-[2px] rounded-bl">
            <IcCharacter />
          </div>

          <div class="bg-white-opacity py-1 px-4 mt-auto w-full">
            <h1 class="font-bold text-lg">
              {{ character.name }}
            </h1>
          </div>
        </article>
      </li>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import CharactersFromGame from '@/services/characters/CharactersFromGame.gql';
import IcCharacter from '@/components/icons/IcCharacter.vue';
import { useFormattedTitle } from '@/utils/title';
import ICharactersFromGameResponse from '@/types/services/characters/CharacterFromGame';

export default defineComponent({
  name: 'GamePage',
  components: {
    IcCharacter,
  },
  props: ['gameId'],
  setup(props) {
    const { result, loading } = useQuery<ICharactersFromGameResponse>(
      CharactersFromGame,
      () => ({
        gameId: props.gameId,
      })
    );
    const characters = useResult(result, [], data => data.characters);
    const gameTitle = useResult(result, '', data => data.game.title);

    let title = useFormattedTitle(gameTitle);

    const sortedCharacters = computed(() =>
      [...characters.value].sort((characterA, characterB) =>
        characterA.name.localeCompare(characterB.name)
      )
    );

    return {
      loading,
      sortedCharacters,
      title,
    };
  },
});
</script>
