<template>
    <q-page class="fit column justify-start items-center">
      <div class="col-9 text-center" style="overflow: auto;min-width: 200px; max-width: 200px;">
          <q-scroll-area style="max-width: 95vw; height: 95vw;
            max-height: 70vh;" class="round-borders shadow-2"
            :thumb-style="{
              right: '4px',
              borderRadius: '5px',
              background: 'transparent',
              width: '10px',
              opacity: 1
            }"
            :delay="2000">
      <h5 class="text-accent">Register</h5>
            <q-form @submit="register" class="q-gutter-md text-center">
              <q-input class="" rounded outlined v-model="username" placeholder="Username" dense type="text" />
              <q-input class="" rounded outlined v-model="email" placeholder="Email" dense type="text" />
              <q-input class="" rounded outlined v-model="password" placeholder="Password" dense type="password" />
              <q-input class="" rounded outlined v-model="repeat_password" placeholder="Repeat Password" dense type="password" />
              <q-btn type="submit" :loading="loading1" icon="person_add" outline rounded color="accent" label="Register" class="q-px-lg shadow-2"/>
            </q-form>
          </q-scroll-area>
      </div>
      <!-- <div v-show="error" class="text-red text-center block q-mt-sm">
          {{ error }}
      </div> -->
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
      error: null,
      loading1: false
    };
  },
  methods: {
    async register () {
      this.loading1 = true
      try {
        console.log("register button was clicked", this.password);
        const response = await AuthenticationService.registerUser({
        username: this.username,
        email: this.email,
        password: this.password,
        repeat_password: this.repeat_password
        })
        // console.log(response.data);
        this.loading1 = false
        // console.log(response.data.token)
        this.$store.dispatch('setToken', { token: response.data.token })
        this.$store.dispatch('setUser', response.data.user.username)
        this.$router.push({
          name: 'workouts'
        })
      } catch (error ) {
        // this.error = error.response.data.error;
        this.error = error.response.data.error
        this.loading1 = false
        this.$q.notify({
          message: `${this.error}`,
          color: 'negative',
          timeout: 0,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    }
  }
}
</script>
