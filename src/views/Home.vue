<template>
  <div class="wrapper__app">
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
