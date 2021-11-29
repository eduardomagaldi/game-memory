import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games/memory-ascending/:numberOfCards/intro",
    name: "MemoryAscendingIntro",
    component: () => import("../views/MemoryAscendingIntro.vue"),
  },
  {
    path: "/games/memory-ascending/:numberOfCards/cards",
    name: "MemoryAscendingCards",
    component: () => import("../views/MemoryAscendingCards.vue"),
  },
  {
    path: "/games/memory-ascending/:numberOfCards/challenge",
    name: "MemoryAscendingChallenge",
    component: () => import("../views/MemoryAscendingChallenge.vue"),
  },
  {
    path: "/games/memory-ascending/success",
    name: "Success",
    component: () => import("../views/Success.vue"),
  },
  {
    path: "/games/memory-ascending/history",
    name: "History",
    component: () => import("../views/History.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
