<template>
  <div class="ListCard">
    <div class="wrapper__inner">
      <template v-if="cards && cards.length">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          :flipped="flipped"
          :color="color"
          @click="onClick"
        />
      </template>

      <template v-else> Loading... </template>
    </div>

    <span class="error" v-if="fail">
      Wrong answer :(<br />please try again.
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { CardType } from "./../common/interfaces";

import Card from "@/components/Card.vue";

@Component({
  components: {
    Card,
  },
})
export default class ListCard extends Vue {
  @Prop({ default: false }) private flipped!: boolean;
  @Prop({ default: false }) private showReset!: boolean;
  @Prop({ default: true }) private requestData!: boolean;
  @Prop() private color!: string;

  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );

  get cards(): CardType[] | null {
    return this.$store.state.turns?.turn?.cards;
  }

  get indexCurr(): number {
    return this.$store.state.turns?.indexCurr;
  }

  get fail(): boolean {
    return this.$store.state.turns?.fail;
  }

  async created(): Promise<void> {
    if (this.numberOfCards > 12) {
      throw new Error("numberOfCards too high");
    }

    if (!this.cards) {
      if (this.requestData) {
        await this.$store.dispatch("getCards", this.numberOfCards);
      } else {
        this.$router.push({
          name: "MemoryAscendingCards",
          params: { numberOfCards: this.numberOfCards.toString() },
        });
      }
    }
  }

  onClick(card: CardType): void {
    const resp = { card, index: this.indexCurr };
    this.$store.dispatch("setIndexAnswer", resp);
    this.$store.dispatch("setIndexCurr", this.indexCurr + 1);

    if (this.cards) {
      const complete = this.cards.filter((card: CardType) => {
        return card?.indexAnswer !== undefined;
      });

      if (complete.length === this.numberOfCards) {
        this.showResult();
      }
    }
  }

  showResult(): void {
    const sorted = this.cards?.slice().sort(compare);
    let result = true;

    if (sorted && sorted.length) {
      result = sorted.every((card: CardType, index: number) => {
        if (card.indexAnswer === index) {
          return true;
        }

        return false;
      });
    }

    if (result) {
      this.$router.push({
        name: "Success",
      });
    } else {
      this.$store.dispatch("setFail", true);
    }
  }
}

function compare(a: CardType, b: CardType): number {
  if (a.value > b.value) {
    return 1;
  }

  if (a.value < b.value) {
    return -1;
  }

  return 0;
}
</script>

<style scoped lang="scss">
.ListCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.Card {
  margin: 5px;
}

.wrapper__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 440px;
}

.error {
  color: red;
}
</style>
