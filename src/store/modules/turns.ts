import fetch from "@/helpers/fetch";

interface State {
  bla?: boolean;
}

// export enum MutationTypes {
//   SET_COUNTER = 'SET_COUNTER',
// }

// export type Mutations<S = State> = {
//   [MutationTypes.SET_COUNTER](state: S, payload: number): void
// }

// export type Mutations<S = State> = {
//   [MutationTypes.SET_COUNTER](state: S, payload: number): void
// }

// export const mutations: MutationTree<State> & Mutations = {
//   [MutationTypes.SET_COUNTER](state, payload: number) {
//     state.counter = payload
//   },
// }

// export interface MutationTree<S> {
//   [key: string]: Mutation<S>;
// }

interface Context {
  commit: any;
}

export default {
  state: {
    turns: [],
  },
  mutations: {
    SET_TURN(state: State, loggedin: boolean): void {
      // state.loggedin = loggedin;
    },
    SET_USER(state: State, user: boolean): void {
      // state.user = user;
    },
    SET_USERS_LIST(state: State, usersList: any): void {
      // state.usersList = usersList;
    },
  },
  actions: {
    login: async function (context: Context, query: string): Promise<any> {
      console.log("login");
      const data = await fetch.get("/api/login" + query);
      return data;
    },
    logout: async function (): Promise<any> {
      const data = await fetch.post("/api/logout", {});
      return data;
    },
    fetchUsersList: async function (context: Context): Promise<any | void> {
      // if (!context.usersList) {
      const data = await fetch.get("/api/cards");
      context.commit("SET_USERS_LIST", data);
      return data;
      // }
    },
  },
};
