<template>
  <nav class="col-md-2">
    <div class="d-none d-md-block bg-main sidebar">
      <div class="d-flex flex-column p-3 mt-3 text-white rounded bg-2 align-items-center">
        <img class="img-fluid img-thumbnail rounded-circle mb-2 img-custom" :src="user.avatar">
        <div>{{ user.name }}</div>
      </div>
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
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
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
.bg-2 {
  background-color: rgb(120, 110, 131);
}
.img-custom {
  width: 6vw;
}
</style>