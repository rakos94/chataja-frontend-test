<template>
  <nav class="col-md-2">
    <div class="d-none d-md-block bg-main sidebar">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="doLogout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    doLogout(){
      localStorage.removeItem("user")
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="scss">
@import "@/variable.scss";
.nav-link {
  color: white;

  &:hover {
    color: white;
    background-color: $mainHoverColor;
  }
}
</style>