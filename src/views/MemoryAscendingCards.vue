<template>
  <div class="about">
    <h2>Cards</h2>

    <!-- {{ cards.length }} -->

    <div v-for="(cardNumber, index) in cards" :key="index" class="card">
      {{ cardNumber }}
    </div>

    <router-link
      :to="{
        name: 'MemoryAscendingChallenge',
        params: {
          numberOfCards,
        },
      }"
    >
      Go to cards -->
    </router-link>
  </div>
</template>

<script lang="ts">
// this.$route.params.clientId

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MemoryAscending extends Vue {
  // @Prop() private msg!: string;

  private cards: number[] = [];
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );

  // const clientId: number = this.$route?.params?.numberOfCards;

  // numberOfCards: number = parseInt(this.$route?.params?.numberOfCards, 10);

  created(): boolean {
    if (this.numberOfCards > 12) {
      throw new Error();
    }

    for (let i = 0; i < this.numberOfCards; i++) {
      this.cards.push(Math.round(Math.random() * 100));
    }

    console.log("this.cards", JSON.stringify(this.cards));

    return true;
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid black;
  display: inline-block;
  padding: 30px;
}
</style>