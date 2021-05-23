import { Vue } from 'vue-property-decorator';
import { CardType } from "@/common/interfaces";
import fetch from "@/helpers/fetch";

interface Turn {
  date: Date;
  cards: CardType[];
}

interface State {
  bla?: boolean;
  turn: Turn;
}

interface Context {
  commit: any;
  state: any;
}

export default {
  state: {
    turn: {},
  },
  mutations: {
    SET_TURN(state: State, cards: CardType[]): boolean {
      state.turn = {
        date: new Date(),
        cards,
      };
      return true;
    },
    SET_INDEX(state: State, card: CardType, index: number): void {
      Vue.delete(card, 'indexSelected');
    },
  },
  actions: {
    getCards: async function (
      context: Context,
      numberOfCards: number
    ): Promise<CardType[]> {
      const a: CardType[] = await fetch.get(`/api/cards/${numberOfCards}`);

      context.commit("SET_TURN", a);

      return new Promise((resolve) => {
        resolve(a);
      });
    },
    resetIndexes: async function (
      context: Context,
      numberOfCards: number,
    ): Promise<CardType[]> {

      // Vue.set(selected, "indexSelected", this.indexCurr);
      // console.log('resetIndexes');

      console.log("context", context);

      context.state.turn.cards.forEach((card: CardType) => {
        context.commit("SET_INDEX", card);
      });
    },
  },
};
