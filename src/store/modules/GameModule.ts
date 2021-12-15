import { useQuery, useResult } from "@vue/apollo-composable";
import { Module } from "vuex";
import { RootState } from "@/store";
import { Game } from "@/types/Game";
import { Ref } from "vue";
import { GET_GAMES } from "@/services/games";

export enum ActionTypes {
  getGames = "GET_GAMES"
}
export type Actions<S = RootState> = {
  [ActionTypes.getGames](state: S): void;
};

export enum MutationTypes {
  GET_GAMES = "GET_GAMES"
}
export type Mutations<S = RootState> = {
  [MutationTypes.GET_GAMES](state: S, payload: unknown): void;
};

export interface GamesState {
  list: Game[];
}

export const gameModule: Module<GamesState, RootState> = {
  state: {
    list: []
  },
  mutations: {
    [MutationTypes.GET_GAMES](state, payload: Ref<Game[]>) {
      state.list = payload.value;
    }
  },
  actions: {
    [ActionTypes.getGames]({ commit }): void {
      const { result } = useQuery(GET_GAMES, null, {
        fetchPolicy: "network-only"
      });

      return commit(
        MutationTypes.GET_GAMES,
        useResult(result, [], data => data.games)
      );
    }
  }
};
