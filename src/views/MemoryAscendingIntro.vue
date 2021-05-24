<template>
  <div class="wrapper__app">
    <h2 class="mt-0 mb-0">Memory (ascending) Game</h2>

    <h3>How it works:</h3>

    <ol>
      <li>You will see {{ numberOfCards }} cards with random numbers.</li>
      <li>Take your time to memorise the cards.</li>
      <li>Once you are done, click the PLAY button.</li>
      <li>All the cards' numbers will be hidden.</li>
      <li>
        You have to click the cards with their numbers in ascending order.
      </li>
      <li>You get your result.</li>
    </ol>

    <p>Have fun!</p>

    <router-link
      :to="{
        name: 'MemoryAscendingCards',
        params: {
          numberOfCards,
        },
      }"
      class="btn"
    >
      Go to cards -->
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MemoryAscending extends Vue {
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );
}
</script>
