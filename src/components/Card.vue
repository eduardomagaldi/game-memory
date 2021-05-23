<template>
  <div
    class="Card"
    :class="[
      flipped ? 'Card--flipped' : '',
      small ? 'Card--small' : '',
      `Card--${color}`,
    ]"
  >
    <div class="inner">
      <div class="front face" @click="onClick">
        <template v-if="card">
          {{ card.indexSelected !== undefined ? card.indexSelected + 1 : "" }}
        </template>
      </div>
      <div class="back face">
        <template v-if="card">
          {{ card.value }}
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { CardType } from "./../common/interfaces";

@Component
export default class Card extends Vue {
  @Prop() private card!: CardType;
  @Prop({ default: false }) private flipped!: boolean;
  @Prop({ default: false }) private small!: boolean;
  @Prop() private color!: string;

  onClick(): void {
    this.$emit("click", this.card);
  }
}
</script>

<style scoped lang="scss">
.Card {
  background-color: transparent;
  width: 100px;
  height: 150px;
  perspective: 1000px;

  &.Card--small {
    width: 10px * 3;
    height: 15px * 3;
  }
}

@for $i from 1 through 12 {
  .Card:nth-child(#{$i}) .inner {
    transition-delay: ($i * 0.05s);
    // opacity: 0.3;
  }
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  // transition-delay: 1s;
}

// .btn--select {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
// }

.Card--flipped .inner {
  transform: rotateY(180deg);
}

.face {
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

.Card--small .face {
  border: 5px double white;
}

.front {
  background-color: #bbb;
}

.back {
  color: white;
  transform: rotateY(180deg);
}

.Card--easy .back {
  background-color: #6ccbdf;
}

.Card--medium .back {
  background-color: #ffbd19;
}

.Card--hard .back {
  background-color: #ef0365;
}
</style>
