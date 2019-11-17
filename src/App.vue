<template>
  <div id="app">
    <div class="container-fluid bg-main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/variable.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.bg-main {
  background-color: $mainColor
}
.sidebar {
  height: 100vh;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
