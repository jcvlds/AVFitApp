<template>
  <q-page class="fit column justify-start items-center">
    <div class="col-9 text-center" style="overflow: auto;min-width: 200px; max-width: 200px;">
      <!-- <h5 class="text-center text-accent">Login</h5> -->
      <h5 class="text-accent">Login</h5>
      <q-form @submit="login" class="q-gutter-md">
        <q-input class="" :rules="[val => !!val || 'Field is required']" ref="name"
          rounded outlined v-model="username" placeholder="Username" autofocus dense />
        <q-input class="" :rules="[val => !!val || 'Field is required']" ref="name"
          rounded outlined v-model="password" placeholder="Password" dense type="password" />
        <q-btn type="submit"
          :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Login" class="q-px-lg shadow-2"/>
      </q-form>
    </div>
    <!-- <div v-show="error" class="text-red text-center block q-mt-sm">
      {{ error }}
    </div> -->
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
      // this.$refs.name.validate()
      // console.log(this.$refs.name)
      this.loading1 = true
      try {
        // console.log('test')
        const response = await AuthenticationService.login({
        username: this.username,
        password: this.password
        })
        // console.log(response.data);
        this.$store.dispatch('setToken', { token: response.data.token })
        // this.$store.dispatch('setUser', response.data.userInfo.username)
        // this.$store.dispatch('setUser', this.username)
        // this.$store.dispatch('setUser', response.data.userInfo.name)
        this.$store.dispatch('setUser', response.data.userInfo)
        // this.$axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        this.loading1 = false
        this.$router.push({
          name: 'home'
        })
      } catch (err) {
        // console.log(err)
        this.error = err.response.data.error
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

<style scoped>
</style>
