import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls"
var ls = new SecureLS({ isCompression: false })

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

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
        // const token = localStorage.getItem('token');
        // Vue.prototype.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
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
   createPersistedState({
     storage: {
       getItem: key => ls.get(key),
       setItem: (key, value) => ls.set(key, value),
       removeItem: key => ls.remove(key)
     }
   })
  ],

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});
export default function(/* { ssrContext } */) {

  return Store;
}
export { Store }
