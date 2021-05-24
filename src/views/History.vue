<template>
  <div class="wrapper__app">
    <h2 class="mb-0 mt-0">History of turns</h2>

    <table>
      <tr v-for="(key, index) in allHistory" :key="index">
        <template v-if="getItem(key)">
          <td>
            <template v-if="getItem(key)">{{
              getDate(key).split(" GMT")[0]
            }}</template>
          </td>
          <td>
            <template v-if="getItem(key)">
              <span v-for="(card, index) in getItem(key)" :key="index">
                {{ card.value }},
              </span>
            </template>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ListCard from "@/components/ListCard.vue";

@Component({
  components: {
    ListCard,
  },
})
export default class History extends Vue {
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );
  private prefix = "turn-";

  getItem(key: string): string | null {
    if (key.includes(this.prefix)) {
      const result: string = localStorage.getItem(key) as string;
      if (!result) return null;
      return JSON.parse(result);
    }

    return null;
  }

  getDate(key: string): string | null {
    if (key.includes(this.prefix)) {
      const date = key.split(this.prefix)[1];
      return new Date(parseInt(date, 10)).toString();
    }

    return null;
  }

  get allHistory(): string[] {
    const allkeys = Object.keys(localStorage);
    allkeys.sort().reverse();
    return allkeys;
  }
}
</script>

<style scoped lang="scss">
table {
  tr {
    td {
      border: 1px solid;
    }
  }
}
</style>
