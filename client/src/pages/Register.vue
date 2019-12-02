/* eslint-disable */
<template>
  <q-page class="">
    <h5 class="text-accent">Register</h5>
    <q-form @submit="login" class="q-gutter-md text-center">
      <q-input class="" rounded outlined v-model="username" placeholder="Username" dense type="text" />
      <q-input class="" rounded outlined v-model="email" placeholder="Email" dense type="text" />
      <q-input class="" rounded outlined v-model="password" placeholder="Password" dense type="password" />
      <q-input class="" rounded outlined v-model="repeat_password" placeholder="Repeat Password" dense type="password" />
      <q-btn type="submit" :loading="loading1" icon="person_add" outline rounded color="accent" label="Register" class="q-px-lg shadow-2"/>
    </q-form>

    <div class="error" v-html="error" />
  </q-page>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
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
    }
  }
}
</script>
