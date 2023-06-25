<template>
  <p v-if="loading">Chargement...</p>

  <template v-else>
    <article
      v-if="games.last"
      ref="heroRef"
      class="hero relative bg-center bg-cover min-h-[300px] md:h-[500px] pt-28 md:pt-0 mb-12 flex flex-col justify-end before:content-[''] before:absolute before:inset-0 before:bg-primary before:bg-opacity-70 overflow-hidden"
      :style="`background-image: url(${games.last.picture_url})`"
    >
      <div class="max-w-screen-xl mx-auto w-full relative px-8 mb-12 md:mb-4">
        <RouterLink
          custom
          :to="{ name: 'game', params: { gameId: games.last.id } }"
          v-slot="{ navigate }"
        >
          <h1
            class="text-secondary text-3xl md:text-4.5xl font-secondary md:mb-7 flex items-baseline cursor-pointer"
            @click="navigate"
          >
            <PrismIcon class="mr-1" />
            {{ games.last.title }}
            <PrismIcon class="ml-2" />
          </h1>
        </RouterLink>

        <p class="text-white md:text-xl">{{ games.last.description }}</p>
      </div>

      <div class="self-end relative flex shadow-hero">
        <BaseTooltip
          class="bg-secondary rounded-tl-md inline-flex items-center"
          :tooltip-text="games.last.dungeon_master.username"
        >
          <DungeonMasterIcon class="w-6 h-6 md:w-10 md:h-10" />
        </BaseTooltip>
        <div class="bg-tertiary inline-flex items-center">
          <BaseTooltip
            v-for="player in games.last.players"
            :key="player.user.id"
            :tooltip-text="player.user.username"
          >
            <PlayerIcon class="w-6 h-6 md:w-10 md:h-10" />
          </BaseTooltip>
          <p class="text-sm md:text-lg px-2.5 md:px-5">
            {{
              format(new Date(games.last.created_at), 'dd MMMM yyyy', {
                locale: fr,
              })
            }}
          </p>
        </div>
      </div>
    </article>

    <div class="max-w-xl mx-auto px-4">
      <div class="mb-12">
        <h2 class="page-title mb-11">Lancer de <span>dés</span></h2>

        <div class="flex justify-between items-center flex-wrap gap-4">
          <div
            class="cursor-pointer select-none flex-none"
            @click="rollDie(EDie.Die6)"
          >
            <D6 :result="dieResult.die6" />
          </div>
          <div
            class="cursor-pointer select-none flex-none"
            @click="rollDie(EDie.Die10)"
          >
            <D10 :result="dieResult.die10" />
          </div>
          <div
            class="cursor-pointer select-none flex-none"
            @click="rollDie(EDie.Die20)"
          >
            <D20 :result="dieResult.die20" />
          </div>
          <div
            class="cursor-pointer select-none flex-none"
            @click="rollDie(EDie.Die100)"
          >
            <D100 :result="dieResult.die100" />
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="page-title mb-8">Dernières <span>campagnes</span></h2>

        <ul class="grid gap-8 md:gap-14 md:grid-cols-2 mb-8">
          <RouterLink
            :to="{ name: 'game', params: { gameId: game.id } }"
            v-for="game in games.others"
            :key="game.id"
            custom
            v-slot="{ navigate }"
          >
            <li @click="navigate">
              <article
                class="bg-white rounded shadow-md p-3 hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden"
              >
                <div
                  class="absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"
                >
                  <QuestIcon />
                </div>

                <h1 class="font-bold text-lg">{{ game.title }}</h1>
                <p>{{ game.description }}</p>
              </article>
            </li>
          </RouterLink>
        </ul>

        <div class="text-center">
          <RouterLink :to="{ name: 'games' }" custom v-slot="{ navigate }">
            <BaseButton class="primary circled" @click="navigate">
              Voir plus de campagnes
            </BaseButton>
          </RouterLink>
        </div>
      </div>

      <div>
        <h2 class="page-title mb-8">Derniers <span>personnages</span></h2>

        <ul class="grid gap-8 md:gap-14 md:grid-cols-2 mb-8">
          <RouterLink
            v-for="character in characters"
            :to="{ name: 'character', params: { characterId: character.id } }"
            :key="character.id"
            custom
            v-slot="{ navigate }"
          >
            <li @click="navigate">
              <article
                class="bg-white rounded shadow-md hover:bg-slate-50 hover:cursor-pointer transition-colors duration-200 ease-in-out relative overflow-hidden min-h-[180px] flex bg-center bg-cover"
                :style="{ backgroundImage: `url(${character.picture_url})` }"
              >
                <div
                  class="absolute bg-secondary top-0 right-0 p-[2px] rounded-bl"
                >
                  <CharacterIcon />
                </div>

                <div class="bg-white-opacity py-1 px-4 mt-auto w-full">
                  <h1 class="font-bold text-lg">
                    {{ character.name }}
                  </h1>
                </div>
              </article>
            </li>
          </RouterLink>
        </ul>

        <div class="text-center">
          <RouterLink
            :to="{ name: 'characters_list' }"
            custom
            v-slot="{ navigate }"
          >
            <BaseButton class="primary circled" @click="navigate">
              Voir plus de personnages
            </BaseButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import QuestIcon from '@/components/icons/IcQuest.vue';
import PrismIcon from '@/components/icons/PrismIcon.vue';
import DungeonMasterIcon from '@/components/icons/DungeonMasterIcon.vue';
import PlayerIcon from '@/components/icons/PlayerIcon.vue';
import D6 from '@/components/dices/D6.vue';
import D10 from '@/components/dices/D10.vue';
import D20 from '@/components/dices/D20.vue';
import D100 from '@/components/dices/D100.vue';
import { useQuery } from '@vue/apollo-composable';
import GetHomeData from '@/services/GetHomeData.query.gql';
import IHomeQuery from '@/types/services/HomeQuery.interface';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { computed, ref } from 'vue';
import IGame from '@/types/Game';
import ICharacter from '@/types/Character.interface';
import CharacterIcon from '@/components/icons/IcCharacter.vue';
import { useNavScroll } from '@/utils/updateNavScroll';

enum EDie {
  Die6 = 'die6',
  Die10 = 'die10',
  Die20 = 'die20',
  Die100 = 'die100',
}

const { result, loading } = useQuery<IHomeQuery>(GetHomeData);

const games = computed<{
  last: IGame;
  others: IGame[];
}>(() => {
  const [last, ...others] = result.value?.games ?? [];

  return {
    last,
    others,
  };
});

const characters = computed<ICharacter[]>(() => result.value?.characters ?? []);

const dieResult = ref<Record<EDie, string>>({
  die6: '1',
  die10: '01',
  die20: '01',
  die100: '01',
});

const rollDie = (die: EDie): void => {
  const maxValues = {
    [EDie.Die6]: 6,
    [EDie.Die10]: 10,
    [EDie.Die20]: 20,
    [EDie.Die100]: 100,
  };

  const result = Math.floor(Math.random() * maxValues[die] + 1);

  dieResult.value[die] = new Intl.NumberFormat('fr', {
    minimumIntegerDigits: die === EDie.Die6 ? 1 : 2,
  }).format(result);
};

const { heroRef } = useNavScroll();
</script>
