<template>
  <div class="wrapper__app">
    <h2 class="mb-0 mt-0">Challenge</h2>

    <small>Click on the cards in ascending order.</small>

    <ListCard :flipped="false" :showReset="true" :requestData="false" />

    <button v-if="true" @click="reset()" class="btn">Reset</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ListCard from "@/components/ListCard.vue";

@Component({
  components: {
    ListCard,
  },
})
export default class MemoryAscendingChallenge extends Vue {
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );

  reset(): void {
    // let cards: CardType[] = this.$store.state.turns?.turn?.cards;

    this.$store.dispatch("resetIndexes");

    // Vue.set(selected, "indexSelected", this.indexCurr);

    // this.cards.forEach((card: CardType) => {
    //   Vue.set(card, "indexSelected", undefined);
    // });

    // this.indexCurr = 0;
    // this.fail = false;
  }
}
</script>
