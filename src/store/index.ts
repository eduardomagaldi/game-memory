import Vue from "vue";
import Vuex from "vuex";
import turnsModule from "./modules/turns";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    verbose: false,
  },
  modules: {
    turns: turnsModule,
  },
  actions: {
    saveCurrentFullPath: function (context, fullPath): void {
      localStorage.currentFullPath = fullPath;
    },
  },
});
