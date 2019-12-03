import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      token: null,
      user: null,
      isUserLoggedIn: false
    },
    mutations: {
      setToken(state, token) {
        Vue.set(this.state, "token", token);
        if (token) {
          Vue.set(this.state, "isUserLoggedIn", true);
        } else {
          Vue.set(this.state, "isUserLoggedIn", false);
        }
      },
      setUser(state, user) {
        state.user = user;
      }
    },
    actions: {
      setToken({ commit }, token) {
        commit("setToken", token);
      },
      setUser({ commit }, user) {
        commit("setUser", user);
      }
    },
    // modules: {
    // example
    // login
    // },
    plugins: [
     createPersistedState()
    ],

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
}
