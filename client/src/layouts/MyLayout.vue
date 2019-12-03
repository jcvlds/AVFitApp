<template>
  <q-layout view="hHh Lpr fFf" container style="height: 100vh"
    class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar style="background:linear-gradient(to right, #EACFCC 55%, #B7A29F 100%)">
        <q-btn
          flat dense round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu" aria-label="Menu" class="text-accent" />
        
        <q-separator vertical inset />
        <q-avatar class="q-ml-sm">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>
        
        <q-btn class="text-body1" stretch flat style="width:215px">
          <div class="row items-center no-wrap">
            <div class="text-center">
              AV Fit App
            </div>
          </div>
        </q-btn>
        
        <q-separator vertical inset />
        <q-tabs indicator-color="primary" align="center" v-model="tab1" class="fit text-body1 gt-xs" text-color="white">
            <q-route-tab name="home" label="Home" to="/" />
            <q-route-tab name="workouts" label="Workouts" to="/workouts" />
            <q-route-tab name="nutrition" label="Nutrition" to="/nutrition" />
            <q-route-tab name="check-in" label="Check-In" to="/check-in" />
        </q-tabs>
            <q-space />
        
        <q-separator vertical inset />
        <!-- <q-btn stretch flat label="Login" class="text-body2" text-color="white" /> -->
        <q-tabs indicator-color="primary" class="text-body1 no-wrap" text-color="white">
          <q-route-tab v-if="!$store.state.isUserLoggedIn"
            name="login" label="Login" to="/login" />
          <q-route-tab v-if="!$store.state.isUserLoggedIn"
            name="register" label="Register" to="/register" />
          <q-route-tab v-if="$store.state.isUserLoggedIn"
            name="logout" icon="power_settings_new" label="Logout" to="/login" @click.native="logout" />
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-footer>
      <div class="q-pa-none">
        <div class="q-gutter-y-sm">
          <q-tabs
            v-model="tab1"
            narrow-indicator
            align="justify"
            class="text-white">
            <q-route-tab class="" name="home" icon="home" label="Home" to="/" />
            <q-separator vertical inset />
            <q-route-tab class="" name="workouts" icon="assignment" label="Workouts" to="/workouts" />
            <q-separator vertical inset />
            <q-route-tab class="" name="nutrition" icon="calendar_today" label="Nutrition" to="/nutrition" />
            <q-separator vertical inset />
            <q-route-tab class="" name="check-in" icon="check" label="Check-In" to="/check-in" />
          </q-tabs>
        </div>
      </div>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250" :breakpoint="767"
      bordered content-class="bg-brandlight">
      <q-list>
        <q-item-label header>Account Settings</q-item-label>
        <q-item class="text-accent" clickable to="/account-info">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Account Info</q-item-label>
            <!-- <q-item-label caption>Update email</q-item-label> -->
          </q-item-section>
        </q-item>

        <q-item clickable class="text-accent" to="/body-stats">
          <q-item-section avatar>
            <q-icon name="accessibility" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Body Stats</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false,
      tab1: 'home',
      error: null
    };
  },
  methods: {
    async logout () {
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      } catch (error) {
        this.error = error.response.data.error
        this.$q.notify({
          message: `${this.error}`,
          color: 'negative',
          timeout: 0,
          actions: [{ icon: 'close', color: 'white' }]
        })
      }
    }
  }
};
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>