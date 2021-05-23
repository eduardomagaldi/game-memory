<template>
  <div class="wrapper__app">
    <h2 class="mt-0 mb-0">Congratulations, you win!</h2>

    <router-link
      :to="{
        name: 'Home',
      }"
      :class="'btn--play'"
    >
      Start again
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Success extends Vue {}
</script>
