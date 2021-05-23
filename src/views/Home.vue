<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Lepaya</h1>
    <h1>Memory Ascending Game</h1>

    <ChooseDifficulty />
  </div>
</template>

<script>
import ChooseDifficulty from "@/components/ChooseDifficulty.vue";

export default {
  name: "Home",
  components: {
    ChooseDifficulty,
  },
};
</script>
