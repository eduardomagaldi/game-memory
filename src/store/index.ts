import Vue from "vue";
import Vuex from "vuex";
import turnsModule from "./modules/turns";
import { State } from "@/common/interfaces";

Vue.use(Vuex);

export default new Vuex.Store<State>({
  state: {
    count: 0,
  },
  modules: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    turns: turnsModule as any,
  },
  actions: {},
});
