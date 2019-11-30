/* eslint-disable */
<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
    <h5>Login</h5>

    <!-- <input
      type="text"
      name="username"
      placeholder="username"
      v-model="username" />
		<br />
		<input
      type="password"
      name="password"
      placeholder="password"
      v-model="password" />
		<br /> -->
      <h5>Login</h5>
        <form>
          <q-text-field
          label="Username"
          v-model="username"
          ></q-text-field>
        </form>
    <div class="danger-alert" v-html="error" />
    <q-button
      dark
      class="primary"
      @click="login">
      Login
    </q-button>
		<!-- <button
      @click="login">
      Login
    </button> -->
  </q-page>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login () {
      try {
        console.log("login button was clicked", this.username, this.password);
        const response = await AuthenticationService.login({
        username: this.username,
        password: this.password
        })
        console.log(response.data);
      } catch (error ) {
        // this.error = error.response.data.error
        this.error = error.response.data.error
      }
  },
  // watch: {
  //   }
}
}
</script>

<style scoped>
</style>
