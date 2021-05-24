<template>
  <div id="app">
    <a href="/">
      <h1 class="mt-0 d-flex align-items-center justify-content-center">
        <img alt="Lepaya" src="./assets/lepaya.png" height="50" class="mr-1" />
        Memory Game (Ascending)
      </h1>
    </a>

    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import "~normalize.css/normalize.css";

@import "@/styles/variables";

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
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
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

.mt-2 {
  margin-top: 2em !important;
}

.d-flex {
  display: flex !important;
}

.align-items-center {
  align-items: center !important;
}

.justify-content-center {
  justify-content: center !important;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

h1,
h2,
h3 {
  font-weight: bold;
  color: #2c3239;
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

  background-color: rgb(240, 240, 240);
}

ul,
ol {
  text-align: left;
}

.btn {
  background-color: $blue;
  border-radius: 300px;
  border: none;
  color: white;
  padding: 10px 20px;
  transition: background-color 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: darken($blue, 30);
  }
}
</style>
