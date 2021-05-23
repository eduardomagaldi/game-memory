<template>
  <div class="ListCard">
    <!-- <div class="card" :class="flipped ? 'card--flipped' : ''"> -->
    <!-- <div class="inner">
      <button class="front face" @click="onClick(index)">
        {{ card.indexSelected }}
      </button>
      <div class="back face"></div>
    </div> -->
    <!-- </div> -->

    <div
      class="flip-card"
      v-for="(card, index) in cards"
      :key="index"
      :class="flipped ? 'flip-card--flipped' : ''"
    >
      <div class="flip-card-inner">
        <div class="flip-card-front" @click="onClick(index)">
          <!-- <img
            src="img_avatar.png"
            alt="Avatar"
            style="width: 300px; height: 300px"
          /> -->
          <!-- <button class="btn btn--select"> -->
          {{ card.indexSelected }}
          <!-- </button> -->
        </div>
        <div class="flip-card-back">
          {{ card.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Card {
  value: number;
  indexSelected?: number;
}

@Component
export default class ListCard extends Vue {
  @Prop() private flipped!: boolean;

  private cards: Card[] = [];
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );
  private indexCurr = 0;

  created(): boolean {
    if (this.numberOfCards > 12) {
      throw new Error();
    }

    for (let i = 0; i < this.numberOfCards; i++) {
      this.cards.push({
        value: Math.round(Math.random() * 100),
      });
    }

    return true;
  }

  onClick(index: number): void {
    // console.log("index", index);

    const selected: Card = this.cards?.[index];

    // console.log("selected", JSON.stringify(selected));

    if (selected.indexSelected === undefined) {
      Vue.set(selected, "indexSelected", this.indexCurr);
      this.indexCurr++;

      // console.log("selected", JSON.stringify(selected));
      // return (e: MouseEvent): void => {
      //   console.log("e", e);
      // };
    }

    const complete = this.cards.filter((card: Card) => {
      return card.indexSelected !== undefined;
    });

    console.log("complete", complete.length);

    if (complete.length === this.numberOfCards) {
      console.log("showResult");
      this.showResult();
    }

    // console.log("", e);
    // // if (this.numberOfCards > 12) {
    // //   throw new Error();
    // // }
    // const index = 0;

    // e.target.innerHtml += index;

    // for (let i = 0; i < this.numberOfCards; i++) {
    //   this.cards.push(Math.round(Math.random() * 100));
    // }

    // return true;
  }

  showResult(): void {
    const sorted = this.cards.sort(compare);

    console.log("sorted", JSON.stringify(sorted));
  }
}

function compare(a: any, b: any): number {
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
  align-items: center;
  justify-content: center;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
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
</style>
