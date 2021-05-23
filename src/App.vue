<template>
  <div id="app">
    <a href="/"><h1 class="mt-0">Lepaya - Memory Game (Ascending)</h1></a>

    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import "~normalize.css/normalize.css";
// @import url("normalize.css");
// @import "@/styles/variables";
// Required
// require('@/assets/css/main.css')
// import '';

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mt-0 {
  margin-top: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

* {
  box-sizing: border-box;
}

h2 {
  // background: yellow;
}

small {
  // background: gold;
}
</style>
