<template>
  <div class="container vh-100 d-flex align-items-center bg-white">
    <form class="form-signin" @submit="doLogin">
      <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
      <div class="alert alert-danger" role="alert" v-if="'user' in errors">
        {{ errors.user }}
      </div>
      <div class="form-group">
        <label for="inputEmail" class="font-weight-bold">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" 
          v-model="inputs.email">
          <div class="invalid-feedback" v-if="'email' in errors">
            {{ errors.email }}
          </div>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="font-weight-bold">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""
        v-model="inputs.password">
          <div class="invalid-feedback" v-if="'password' in errors">
            {{ errors.password }}
          </div>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'login',
  data() {
    return {
      users: [
        {
          name: 'Jarjit Singh',
          avatar: 'https://api.adorable.io/avatars/160/jarjit@mail.com.png',
          email: 'jarjit@mail.com',
          password: '123456',
        },
        {
          name: 'Ismail bin Mail',
          avatar: 'https://api.adorable.io/avatars/160/ismail@mail.com.png',
          email: 'ismail@mail.com',
          password: '123456',
        }
      ],
      inputs: {
        email: null,
        password: null,
      },
      errors: {},
    }
  },
  mounted(){
    
  },
  methods: {
    doLogin(e){
      e.preventDefault();
      this.errors = {};

      if (!this.inputs.email) {
        this.errors = {...this.errors, email:'Email required.'};
      }
      if (!this.inputs.password) {
        this.errors = {...this.errors, password:'Password required.'};
      }

      let user = this.users.find(user => user.email == this.inputs.email && user.password == this.inputs.password)
      if(user) {
        localStorage.setItem("user", JSON.stringify(user))
        this.$router.push({ path: 'home' })
        return 
      } else {
        this.errors = {...this.errors, user:'Incorrect email or password.'};
      }

      e.preventDefault();
    }
  }
}
</script>

<style>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}
</style>
