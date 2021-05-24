import { Vue } from "vue-property-decorator";
import { CardType } from "@/common/interfaces";
import fetch from "@/helpers/fetch";

interface Turn {
  date: Date;
  cards: CardType[];
}

interface State {
  bla?: boolean;
  turn: Turn;
  indexCurr: number;
  fail: boolean;
}

interface Context {
  state: State;
  rootState: State;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commit: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getters: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rootGetters: any;
}

interface Resp {
  card: CardType;
  index: number;
}

export default {
  state: {
    turn: {},
    indexCurr: 0,
    fail: false,
  },
  mutations: {
    SET_TURN(state: State, cards: CardType[]): void {
      state.turn = {
        date: new Date(),
        cards,
      };
      state.indexCurr = 0;
      state.fail = false;
    },
    SET_FAIL(state: State, result: boolean): void {
      state.fail = result;
    },
    SET_INDEX_CURR(state: State, index: number): void {
      state.indexCurr = index;
    },
    SET_INDEX_ANSWER(state: State, resp: Resp): void {
      const index = findInArray(state.turn.cards, resp.card);

      if (index !== null) {
        Vue.set(state.turn.cards[index], "indexAnswer", resp.index);
      }
    },
    UNSET_INDEX_ANSWER(state: State, card: CardType): void {
      Vue.delete(card, "indexAnswer");
    },
  },
  actions: {
    getCards: async function (
      context: Context,
      numberOfCards: number
    ): Promise<CardType[]> {
      const cards: CardType[] = await fetch.get(`/api/cards/${numberOfCards}`);

      context.commit("SET_TURN", cards);

      return new Promise((resolve) => {
        resolve(cards);
      });
    },

    resetAllIndexes: async function (context: Context): Promise<null> {
      context.state.turn.cards.forEach((card: CardType) => {
        context.commit("UNSET_INDEX_ANSWER", card);
      });

      return null;
    },

    setIndexCurr: function (context: Context, index: number): void {
      context.commit("SET_INDEX_CURR", index);
    },

    setIndexAnswer: function (context: Context, resp: Resp): void {
      context.commit("SET_INDEX_ANSWER", resp);
    },

    setFail: function (context: Context, result: boolean): void {
      context.commit("SET_FAIL", result);
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findInArray(array: any[], itemSearch: any) {
  let index = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array.every((item: any, i: number) => {
    if (itemSearch === item) {
      index = i;
      return false;
    }

    return true;
  });

  return index;
}
