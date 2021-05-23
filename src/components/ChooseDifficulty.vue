<template>
  <div class="Difficulty">
    <h2 class="mt-0 mb-0">Choose Difficulty</h2>

    <router-link
      :to="{
        name: 'MemoryAscendingIntro',
        params: {
          numberOfCards: 4,
        },
      }"
    >
      <h3>Easy (4 cards)</h3>
    </router-link>

    <router-link
      :to="{
        name: 'MemoryAscendingIntro',
        params: {
          numberOfCards: 8,
        },
      }"
    >
      <h3>Medium (8 cards)</h3>
    </router-link>

    <router-link
      :to="{
        name: 'MemoryAscendingIntro',
        params: {
          numberOfCards: 12,
        },
      }"
    >
      <h3>Hard (12 cards)</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ChooseDifficulty extends Vue {}
</script>
