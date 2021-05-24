import Vue from "vue";
import Vuex from "vuex";
import turnsModule from "./modules/turns";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    turns: turnsModule,
  },
  actions: {},
});
