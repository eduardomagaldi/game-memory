<template>
  <div class="wrapper__app">
    <h2 class="mt-0 mb-0">Cards</h2>
    <small>Take your time to memorise the cards, then click Play.</small>

    <ListCard
      :flipped="flipped"
      :forceTurn="true"
      :showReset="false"
      :color="color"
    />

    <button class="btn--play" @click="onPlay">Play -></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListCard from "@/components/ListCard.vue";
import colorHelper from "@/helpers/color";

@Component({
  components: {
    ListCard,
  },
})
export default class MemoryAscending extends Vue {
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );
  private color: string = colorHelper.getColor(this.numberOfCards);
  private flipped = true;

  public onPlay(): void {
    this.flipped = false;

    setTimeout(() => {
      this.$router.push({
        name: "MemoryAscendingChallenge",
        params: { numberOfCards: this.numberOfCards.toString() },
      });
    }, 1200);
  }
}
</script>

<style scoped lang="scss">
// .flex-column {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
</style>
