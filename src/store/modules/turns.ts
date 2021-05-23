import { Card } from "@/common/interfaces";
import fetch from "@/helpers/fetch";

interface Turn {
  date: Date;
  cards: Card[];
}

interface State {
  bla?: boolean;
  turn: Turn;
}

interface Context {
  commit: any;
}

export default {
  state: {
    turn: {},
  },
  mutations: {
    SET_TURN(state: State, cards: Card[]): void {
      state.turn = {
        date: new Date(),
        cards,
      };
    },
  },
  actions: {
    getCards: async function (
      context: Context,
      numberOfCards: number
    ): Promise<any> {
      const cards: Card[] = await fetch.get(`/api/cards/${numberOfCards}`);
      context.commit("SET_TURN", cards);
      return cards;
    },
  },
};
