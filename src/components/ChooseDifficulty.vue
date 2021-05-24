<template>
  <div class="Difficulty">
    <h2 class="mt-0">Choose Difficulty</h2>

    <div>
      <router-link
        class="option easy"
        :to="{
          name: 'MemoryAscendingIntro',
          params: {
            numberOfCards: 4,
          },
        }"
      >
        <div class="d-flex align-items-center">
          <div class="wrapper__img">
            <!-- <img

              alt="Vue logo"
              src="../assets/blue-square.svg"
              width="30"
            /> -->
            <img alt="Vue logo" src="../assets/fish.svg" width="40" />
          </div>
          <h3 class="mb-0 mt-0">Easy (4 cards)</h3>
        </div>

        <div class="cards__wrapper d-flex">
          <Card v-for="index in 4" :key="index" :small="true" color="easy" />
        </div>
      </router-link>

      <router-link
        class="option medium"
        :to="{
          name: 'MemoryAscendingIntro',
          params: {
            numberOfCards: 8,
          },
        }"
      >
        <div class="d-flex align-items-center">
          <div class="wrapper__img">
            <!-- <img

              alt="Vue logo"
              src="../assets/yellow-circle.svg"
              width="30"
            /> -->
            <img alt="Vue logo" src="../assets/parrot.svg" width="40" />
          </div>
          <h3 class="mb-0 mt-0">Medium (8 cards)</h3>
        </div>

        <div class="cards__wrapper d-flex">
          <Card v-for="index in 8" :key="index" :small="true" color="medium" />
        </div>
      </router-link>

      <router-link
        class="option hard"
        :to="{
          name: 'MemoryAscendingIntro',
          params: {
            numberOfCards: 12,
          },
        }"
      >
        <div class="d-flex align-items-center">
          <div class="wrapper__img">
            <!-- <img

              alt="Vue logo"
              src="../assets/pink-triangle.svg"
              width="40"
            /> -->
            <img alt="Vue logo" src="../assets/elephant.svg" width="40" />
          </div>
          <h3 class="mb-0 mt-0">Hard (12 cards)</h3>
        </div>

        <div class="cards__wrapper d-flex">
          <Card v-for="index in 12" :key="index" :small="true" color="hard" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Card from "@/components/Card.vue";

@Component({
  components: {
    Card,
  },
})
export default class ChooseDifficulty extends Vue {}
</script>

<style scoped lang="scss">
@import "@/styles/variables";

.Difficulty {
  width: 100%;
}

::v-deep .option:hover .inner {
  transform: rotateY(180deg);
}

// @for $i from 1 through 12 {
//   .inner:nth-child(#{$i}) {
//     transition-delay: ($i * .1s);
//   }
// }

.option {
  border: 1px solid rgb(226, 226, 226);
  border-bottom-width: 0;
  padding: 10px;
  display: block;
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: background-color 0.3s;

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-bottom-width: 1px;
    border-radius: 0 0 5px 5px;
  }

  h3 {
    color: inherit;
  }

  &.easy {
    color: darken($blue, 10);

    .wrapper__img {
      background-color: lighten($blue, 20);
    }
  }

  &.medium {
    color: darken(#ffbd19, 10);

    .wrapper__img {
      background-color: lighten(#ffbd19, 30);
    }
  }

  &.hard {
    color: darken(#ef0365, 0);

    .wrapper__img {
      background-color: lighten(#ef0365, 45);
    }
  }

  &:hover {
    &.easy {
      background-color: lighten($blue, 30);
    }

    &.medium {
      background-color: lighten(#ffbd19, 40);
    }

    &.hard {
      background-color: lighten(#ef0365, 50);
    }
  }
}

.wrapper__img {
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;

  img {
    position: absolute;
    top: 0;
    left: 0;

    padding: 5px;
  }
}
</style>
