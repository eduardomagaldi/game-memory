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

    <button class="btn--play" @click="onPlay">Play -></button>
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
export default class MemoryAscending extends Vue {
  // @Prop() private msg!: string;
  // const clientId: number = this.$route?.params?.numberOfCards;
  private numberOfCards: number = parseInt(
    this.$route?.params?.numberOfCards,
    10
  );

  private flipped = true;

  public onPlay(e: MouseEvent): void {
    console.log("e", e);
    this.flipped = false;

    setTimeout(() => {
      this.$router.push({
        name: "MemoryAscendingChallenge",
        params: { numberOfCards: this.numberOfCards.toString() },
      });

      // console.log('this.router', );
      // this.$route?.push({ name: 'user', params: { userId: '123' } })
      // console.log('', );
    }, 2000);

    // const image = e.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(image);
    // reader.onload = (e) => {
    //   this.previewImage = e.target.result;
    //   console.log(this.previewImage);
    // };
  }
}
</script>

<style scoped lang="scss">
</style>