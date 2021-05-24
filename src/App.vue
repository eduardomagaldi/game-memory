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

html,
body {
  text-align: center;
  height: 100%;
}

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
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

.mr-1 {
  margin-right: 0.5em !important;
}

.d-flex {
  display: flex !important;
}

.align-items-center {
  align-items: center !important;
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

.wrapper__app {
  max-width: 768px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 40px;
}

ul,
ol {
  text-align: left;
}
</style>
