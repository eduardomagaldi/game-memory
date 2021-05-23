<template>
  <div class="about">
    <h2 class="mb-0 mt-0">Challenge</h2>

    <small>Click on the cards in ascending order.</small>

    <ListCard :flipped="false" />
  </div>
</template>

<script lang="ts">
// this.$route.params.clientId

import { Component, Vue } from "vue-property-decorator";

import ListCard from "@/components/ListCard.vue";

@Component({
  components: {
    ListCard,
  },
})
export default class MemoryAscendingChallenge extends Vue {
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );
}
</script>
