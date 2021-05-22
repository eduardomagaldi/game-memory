<template>
  <div class="Difficulty">
    <h2>Choose Difficulty</h2>

    <a href="/4"></a>
    <!-- <a href="/8"><h3></h3></a> -->
    <!-- <a href="/12"><h3></h3></a> -->

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
// this.$route.params.clientId

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ChooseDifficulty extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>

