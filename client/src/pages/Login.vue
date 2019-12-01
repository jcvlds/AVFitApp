/* eslint-disable */
<template>
  <!-- <q-page class="fixed-center"> -->
  <q-page class="flex-center column justify-start">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->

      <div class="text-center" style="max-width: 200px">
        <h5 class="text-center text-accent">Login</h5>
        <q-form @submit="login" class="q-gutter-md text-center">
        <!-- <div style="max-width: 200px"> -->
          <q-input class="" rounded outlined v-model="username" placeholder="Username" dense />
        <!-- </div> -->
          <!-- <div> -->
            <q-btn type="submit" :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Login" class="q-px-lg shadow-2"/>
          <!-- </div> -->
         </q-form>
      </div>
        <!-- <input
          type="text"
          class="text-center rounded-borders"
          name="username"
          placeholder="username"
          v-model="username" /> -->
        <br />
        <input
          type="password"
          class="text-center q-mt-xs rounded-borders"
          name="password"
          placeholder="password"
          v-model="password" />
        <!-- <q-text-field
        label="Username"
        v-model="username"
        ></q-text-field> -->
      <!-- </form> -->
      <br />
      <div v-show="error" class="text-red text-center block q-mt-sm">
        {{ error }}
      </div>
    <!-- <q-button
      dark
      class="primary"
      @click="login">
      Login
    </q-button> -->
      <div class="text-center">
        <!-- <button
          class="q-mt-sm q-py-xs bg-primary q-px-xl shadow-2 rounded-borders cursor-pointer"
          @click="login">
          Login
        </button> -->
        <q-btn :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Login" class="q-px-lg shadow-2" @click="login" />
        <!-- <q-btn icon="power_settings_new" />
        <q-btn icon="person_add" /> -->
      </div>
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
      error: null,
      loading1: false
    };
  },
  methods: {
    async login () {
      this.loading1 = true
      console.log(this.loading1)
      try {
        console.log("login button was clicked", this.username, this.password);
        const response = await AuthenticationService.login({
        username: this.username,
        password: this.password
        })
        console.log(response.data);
        // console.log(response.data.token)
        // this.$store.dispatch('login/setToken', { token: response.data.token })
        this.$store.dispatch('login/setUser', response.data.user)
        this.loading1 = false
      } catch (error ) {
        // this.error = error.response.data.error
        this.error = error.response.data.error
        this.loading1 = false
      }
  },
  // watch: {
  //   }
}
}
</script>

<style scoped>
</style>
