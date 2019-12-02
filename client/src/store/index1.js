import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate"

import login from "./login";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      login
    },
    //plugins: [
    // createPersistedState()
    // ]

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
