<template>
  <div class="about">
    <h2>Challenge</h2>

    <router-link
      :to="{
        name: 'MemoryAscendingCards',
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

  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );

  // const clientId: number = this.$route?.params?.numberOfCards;

  // numberOfCards: number = parseInt(this.$route?.params?.numberOfCards, 10);

  created(): boolean {
    console.log("this.$route.params.clientId");

    return true;
  }
}
</script>
