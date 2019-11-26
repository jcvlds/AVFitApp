<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
    <h5>Register</h5>

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
      email: "abc",
      password: "123"
    };
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
    })
    console.log("register button was clicked", this.password);
    console.log(response.data);
  },
  watch: {
    email(value) {
      console.log("email has changed", value);
    }
  }
}
}
</script>
