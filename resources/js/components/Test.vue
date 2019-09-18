<template>
  <div id="test">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./ExampleComponent";

export default {
  name: "test",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
