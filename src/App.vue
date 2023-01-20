<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/vue-bind">Vue Bind</router-link> |
    <router-link to="/vue-render">Vue Render</router-link> |
    <router-link to="/vue-method">Vue Method</router-link> |
    <router-link to="/vue-form-handle">Vue Form Handle</router-link> |
    <router-link to="/vue-compute">Vue Compute</router-link> |
    <router-link to="/vue-watcher">Vue Watcher</router-link> |
    <router-link to="/vue-component">Vue Component</router-link> |
    <router-link to="/vue-http">Vue HTTP</router-link> |
    <router-link to="/vue-hook">Vue Hook</router-link> |
    <router-link to="/vue-ref">Vue Ref</router-link> |
    <router-link to="/vue-mixin">Vue Mixin</router-link> |
    <router-link to="/vue-composition-api">Vue Composition API</router-link> |
    
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
