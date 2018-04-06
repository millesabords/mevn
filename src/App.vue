<template>
  <div id="app">
    <img src="./assets/logo.png">
	<h3>trucs</h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  API_URL: 'http://localhost:3000/'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
