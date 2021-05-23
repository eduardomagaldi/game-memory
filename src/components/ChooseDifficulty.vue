<template>
  <div class="Difficulty">
    <h2 class="mt-0">Choose Difficulty</h2>

    <div>
      <router-link
        class="option"
        :to="{
          name: 'MemoryAscendingIntro',
          params: {
            numberOfCards: 4,
          },
        }"
      >
        <div class="d-flex align-items-center">
          <img
            class="mr-1"
            alt="Vue logo"
            src="../assets/blue-square.svg"
            width="30"
          />
          <h3 class="mb-0 mt-0">Easy (4 cards)</h3>
        </div>

        <div class="cards__wrapper d-flex">
          <Card v-for="index in 4" :key="index" :small="true" color="easy" />
        </div>
      </router-link>

      <router-link
        class="option"
        :to="{
          name: 'MemoryAscendingIntro',
          params: {
            numberOfCards: 8,
          },
        }"
      >
        <div class="d-flex align-items-center">
          <img
            class="mr-1"
            alt="Vue logo"
            src="../assets/yellow-circle.svg"
            width="30"
          />
          <h3 class="mb-0 mt-0">Medium (8 cards)</h3>
        </div>

        <div class="cards__wrapper d-flex">
          <Card v-for="index in 8" :key="index" :small="true" color="medium" />
        </div>
      </router-link>

      <router-link
        class="option"
        :to="{
          name: 'MemoryAscendingIntro',
          params: {
            numberOfCards: 12,
          },
        }"
      >
        <div class="d-flex align-items-center">
          <img
            class="mr-1"
            alt="Vue logo"
            src="../assets/pink-triangle.svg"
            width="30"
          />
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
  border: 1px solid grey;
  border-bottom-width: 0;
  padding: 10px;
  display: block;
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-bottom-width: 1px;
    border-radius: 0 0 5px 5px;
  }
}
</style>