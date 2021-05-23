<template>
  <div class="about">
    <h2>Challenge</h2>

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
