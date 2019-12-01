/* eslint-disable */
<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
    <h5>Register</h5>

    <input
      type="text"
      name="username"
      placeholder="username"
      v-model="username" />
		<br />
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email" />
		<br />
		<input
      type="password"
      name="password"
      placeholder="password"
      v-model="password" />
		<br />
		<input
      type="password"
      name="repeat_password"
      placeholder="repeat password"
      v-model="repeat_password" />
		<br />
    <div class="error" v-html="error" />
		<button
      @click="register">
      Register
    </button>
  </q-page>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "abc",
      password: "123",
      repeat_password: "",
      error: null
    };
  },
  methods: {
    async register () {
      try {
        console.log("register button was clicked", this.password);
        const response = await AuthenticationService.registerUser({
        username: this.username,
        email: this.email,
        password: this.password,
        repeat_password: this.repeat_password
        })
        console.log(response.data);
      } catch (error ) {
        // this.error = error.response.data.error;
        this.error = error.response.data.error
      }
    },
  // watch: {
  // }
}
}
</script>
