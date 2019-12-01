/* eslint-disable */
<template>
  <q-layout view="hHh Lpr fFf" container style="height: 400px" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar style="background:linear-gradient(to right, #EACFCC 60%, #a1c4fd 100%)">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          class="text-accent"
        />
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
        <!-- <q-toolbar-title class="text-accent">
          AV Fit App
        </q-toolbar-title> -->
        <!-- <q-item>Login</q-item>
        <q-button class="q-btn q-btn-item no-outline" /> -->
        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <q-separator vertical inset />
        <q-tabs indicator-color="primary" align="center" v-model="tab1" class="fit text-body1" text-color="white">
            <q-route-tab name="home" label="Home" to="/" />
            <q-route-tab name="workouts" label="Workouts" to="/" />
            <q-route-tab name="nutrition" label="Nutrition" to="/" />
        </q-tabs>
            <q-space />
        <q-separator vertical inset />
        <!-- <q-btn stretch flat label="Login" class="text-body2" text-color="white" /> -->
        <q-tabs indicator-color="primary" class="text-body1" text-color="white">
          <q-route-tab name="login" label="Login" to="/login" />
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
            <q-route-tab class="" name="workouts" icon="alarm" label="Workouts" to="/" />
            <q-route-tab class="" name="nutrition" icon="movie" label="Nutrition" to="/" />
          </q-tabs>
        </div>
      </div>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      :breakpoint="767"
      bordered
      content-class="bg-pink-1"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
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
    };
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