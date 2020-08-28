<template>
  <div class="hello">
    <h1>MENU</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="http://localhost:70/#/guide">EDIT</a>
        <a href="http://localhost:70/#/guide">VIEW</a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
