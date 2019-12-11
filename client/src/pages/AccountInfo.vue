<template>
  <q-page class="fit" style="padding-right: 05vw; padding-left: 05vw; padding-bottom: 05vh; padding-top: 10vh">
    <div class="fit q-gutter-y-md">
      
      <div>
        <h5 class="q-my-none text-accent">Account Info</h5>
      </div>
      
      <div>
        <h6 class="text-grey-8 q-mb-lg q-mt-lg">Update your account information</h6>
      </div>

      <div class="row">
        <div class="col-sm-3 col-xs-6 column">
          <div>
            <q-item-label header class="text-grey-9">Name:</q-item-label>
          </div>
          <div>
            <q-input class="styleInput" rounded outlined style="max-width:200px;"
              v-model="name" @keyup.enter="$event.target.blur()" @blur="editName" />
          </div>
        </div>
        <div class="col-sm-3 col-xs-6 column">
          <div>
            <q-item-label header class="text-grey-9">Username:</q-item-label>
          </div>
          <div>
            <q-input class="styleInput" rounded outlined style="max-width:200px;"
              v-model="username" @keyup.enter="$event.target.blur()" @blur="editUsername"/>
          </div>
        </div>
        <div class="col-sm-3 col-xs-6 column">
          <div>
            <q-item-label header class="text-grey-9">Password:</q-item-label>
          </div>
          <div>
            <q-input class="styleInput" rounded outlined style="max-width:200px;"
              v-model="password" @keyup.enter="$event.target.blur()" @blur="prompt = true"/>
          </div>
        </div>
        <div class="col-sm-3 col-xs-6 column">
          <div>
            <q-item-label header class="text-grey-9">Email:</q-item-label>
          </div>
          <div>
            <q-input class="styleInput" rounded outlined style="max-width:200px;"
              v-model="email" @keyup.enter="$event.target.blur()" @blur="editEmail"/>
          </div>
        </div>
      </div>

      <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6 text-accent">Are you sure you want to change your password?</div>
          <p>Repeat your new password below to confirm:</p>
        </q-card-section>

        <q-card-section>
          <q-input dense v-model="repeat_password" autofocus @keyup.enter="editPassword(); prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn class="text-pink-9" flat label="Cancel" v-close-popup />
          <q-btn class="text-pink-9" flat label="Change password" v-close-popup @click="editPassword" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-inner-loading :showing="loading1">
        <q-spinner-ball size="50px" color="red" />
    </q-inner-loading>

  </div>
  </q-page>
</template>

<script>
import AccountService from '../services/AccountService'
export default {
  name: "AccountInfo",
  data() {
    return {
      loading1: false,
      name: '',
      password: '',
      repeat_password: '',
      email: '',
      username: '',
      error: null,
      prompt: false
      }
  },
  methods: {
    async editName () {
      this.loading1 = true
      try {
        // console.log('test')
        const response = await AccountService.editName({
          name: this.name,
          id: this.$store.state.id
        })
        const userInfo = {
          id: this.$store.state.id,
          name: this.name
        }
        this.$store.dispatch('setUser', userInfo)
        this.loading1 = false
        this.$q.notify({
          message: `${response.data.message}`,
          color: 'positive',
          timeout: 1000,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
      catch(err) {
        this.error = err.response.data.error
        this.loading1 = false
        this.$q.notify({
          message: `${this.error}`,
          color: 'negative',
          timeout: 0,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    },
    async editUsername () {
      this.loading1 = true
      try {
        const response = await AccountService.editUsername({
          username: this.username,
          id: this.$store.state.id
        })
        this.loading1 = false
        this.$q.notify({
          message: `${response.data.message}`,
          color: 'positive',
          timeout: 1000,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
      catch(err) {
        this.error = err.response.data.error
        this.loading1 = false
        this.$q.notify({
          message: `${this.error}`,
          color: 'negative',
          timeout: 0,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    },
    async editEmail () {
      this.loading1 = true
      try {
        const response = await AccountService.editEmail({
          email: this.email,
          id: this.$store.state.id
        })
        this.loading1 = false
        this.$q.notify({
          message: `${response.data.message}`,
          color: 'positive',
          timeout: 1000,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
      catch(err) {
        this.error = err.response.data.error
        this.loading1 = false
        this.$q.notify({
          message: `${this.error}`,
          color: 'negative',
          timeout: 0,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    },
    async editPassword () {
      if (this.repeat_password !== this.password) {
        this.$q.notify({
          message: 'Repeat password does not match, please make sure to type the same new password',
          color: 'negative',
          timeout: 1000,
          actions: [{ icon: 'close', color: 'white' }]
        })
      } else {
        this.loading1 = true
        try {
          const response = await AccountService.editPassword({
            password: this.password,
            repeat_password: this.repeat_password,
            id: this.$store.state.id
          })
          this.loading1 = false
          this.$q.notify({
            message: `${response.data.message}`,
            color: 'positive',
            timeout: 1000,
            actions: [{ icon: 'close', color: 'white' }]
          })
          this.password = null
          this.repeat_password = null
        }
        catch(err) {
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
  },
  async mounted() {
    // console.log(this.$store.state.id)
    try {
      const response = await AccountService.fetchUserData({
          id: this.$store.state.id
        })
      this.name = response.data.userInfo.name
      this.email = response.data.userInfo.email
      this.username = response.data.userInfo.username
    }
    catch(err) {
      this.error = err.response.data.error
        this.$q.notify({
          message: `${this.error}`,
          color: 'negative',
          timeout: 0,
          actions: [{ icon: 'close', color: 'white' }]
        })
    }
  }
};
</script>

<style scoped>
.styleInput >>> .q-placeholder {
  text-align: center;
  color: #AD1457
}
</style>