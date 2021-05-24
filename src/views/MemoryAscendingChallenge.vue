<template>
  <div class="wrapper__app">
    <h2 class="mb-0 mt-0">Challenge</h2>

    <small>Click on the cards in ascending order.</small>

    <ListCard :flipped="false" :showReset="true" :requestData="false" />

    <button v-if="true" @click="reset()" class="btn btn--reset">Reset</button>
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
    this.$store.dispatch("resetAllIndexes");
    this.$store.dispatch("setIndexCurr", 0);
    this.$store.dispatch("setFail", false);
  }
}
</script>
