<template>
  <div id="app">
    <nav>
      Vue 練習：
      <ul>
        <li><router-link :to="{path: '/'}">Vue 首頁</router-link></li>
        <li><router-link :to="{path: '/todoList'}">Todo List</router-link></li>
        <li><router-link :to="{path: '/movie'}">Movie</router-link></li>
      </ul>
    </nav>
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
  color: #2c3e50;
}
nav {
  padding: 10px 15px;
  color: black;
  background-color: aquamarine;
  text-align: left;
}
nav ul {
  margin: 10px 0 0;
  padding: 0;
  display: flex;
}
nav ul li {
  margin: 0 15px 0 0;
  padding: 0;
  flex-wrap: wrap;
  list-style-type: none;
}
nav ul li a {
  text-decoration: none;
}
</style>
