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
    SET_USER(state: State, user: boolean): void {
      // state.user = user;
    },
    SET_USERS_LIST(state: State, usersList: any): void {
      // state.usersList = usersList;
    },
  },
  actions: {
    getCards: async function (context: Context, numberOfCards: number): Promise<any> {
      const cards: Card[] = await fetch.get(`/api/cards/${numberOfCards}`);
      context.commit("SET_TURN", cards);
      return cards;
    },
    // logout: async function (): Promise<any> {
    //   const data = await fetch.post("/api/logout", {});
    //   return data;
    // },
    // fetchUsersList: async function (context: Context): Promise<any | void> {
    //   // if (!context.usersList) {
    //   const data = await fetch.get("/api/cards");

    //   return data;
    //   // }
    // },
  },
};
