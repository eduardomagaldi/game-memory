<template>
  <div class="ListCard">
    <div class="wrapper__inner">
      <div
        class="flip-card"
        v-for="(card, index) in cards"
        :key="index"
        :class="flipped ? 'flip-card--flipped' : ''"
      >
        <div class="flip-card-inner">
          <div class="flip-card-front" @click="onClick(index)">
            {{ card.indexSelected !== undefined ? card.indexSelected + 1 : "" }}

            <!-- <small style="color: grey">{{ card.value }}</small> -->
          </div>
          <div class="flip-card-back">
            {{ card.value }}
          </div>
        </div>
      </div>
    </div>

    <span class="error" v-if="fail">
      Wrong answer :(<br />please try again.
    </span>

    <button v-if="!flipped" @click="reset()">Reset</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Card } from "./../common/interfaces";

@Component
export default class ListCard extends Vue {
  @Prop() private flipped!: boolean;
  @Prop() private forceTurn!: boolean;

  private cards: Card[] = [];
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );
  private indexCurr = 0;
  private fail = false;

  async created(): Promise<void> {
    let cards = this.$store.state.turns?.turn?.cards;

    if (!cards || this.forceTurn) {
      cards = await this.$store.dispatch("getCards", this.numberOfCards);
    }

    this.cards = cards;

    if (this.numberOfCards > 12) {
      throw new Error();
    }
  }

  onClick(index: number): void {
    const selected: Card = this.cards?.[index];

    if (selected.indexSelected === undefined) {
      Vue.set(selected, "indexSelected", this.indexCurr);
      this.indexCurr++;
    }

    const complete = this.cards.filter((card: Card) => {
      return card.indexSelected !== undefined;
    });

    if (complete.length === this.numberOfCards) {
      this.showResult();
    }
  }

  showResult(): void {
    const sorted = this.cards.slice().sort(compare);
    let result = true;

    result = sorted.every((card: Card, index: number) => {
      if (card.indexSelected === index) {
        return true;
      }

      return false;
    });

    if (result) {
      this.$router.push({
        name: "Success",
      });
    } else {
      this.fail = true;
    }
  }

  reset(): void {
    this.cards.forEach((card: Card) => {
      Vue.set(card, "indexSelected", undefined);
    });

    this.indexCurr = 0;
    this.fail = false;
  }
}

function compare(a: Card, b: Card): number {
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
}

.wrapper__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;

  width: 100px;
  height: 200px;

  // border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */

  // margin: 40px;
  // border-style: double;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.btn--select {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card--flipped .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  align-items: center;
  display: flex;
  justify-content: center;

  font-size: 60px;

  border: 8px double white;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

.error {
  color: red;
}
</style>
