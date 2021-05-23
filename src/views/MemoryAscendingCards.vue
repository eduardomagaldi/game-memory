<template>
  <div class="about">
    <h2>Cards</h2>

    <ListCard :flipped="flipped" />

    <small>Take your time to memorise the cards, then click Play.</small>

    <button class="btn--play" @click="onPlay">Play -></button>
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
export default class MemoryAscending extends Vue {
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );

  private flipped = true;

  public onPlay(): void {
    this.flipped = false;

    setTimeout(() => {
      this.$router.push({
        name: "MemoryAscendingChallenge",
        params: { numberOfCards: this.numberOfCards.toString() },
      });
    }, 2000);
  }
}
</script>
