<template>
  <div class="about">
    <h2>Congratulations, you win!</h2>

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
