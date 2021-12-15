import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger
} from "vuex";
import { gameModule, GamesState } from "@/store/modules/GameModule";

export interface RootState {
  games: GamesState;
}

export default createStore<RootState>({
  modules: {
    games: gameModule
  },
  plugins:
    process.env.NODE_ENV !== "production" ? [createLogger<RootState>()] : []
});

export const storeKey: InjectionKey<Store<RootState>> = Symbol("store");

export function useStore() {
  return baseUseStore(storeKey);
}
