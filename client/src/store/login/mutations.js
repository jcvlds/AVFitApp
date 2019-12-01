/* eslint-disable */
export function setToken(state, token) {
  Vue.set(this.state, "token", token);
  // state.token = token
  if (token) {
    Vue.set(this.state, "isUserLoggedIn", true);
    // state.isUserLoggedIn = true
  } else {
    // Vue.set(this.state, "isUserLoggedIn", false);
    state.isUserLoggedIn = false
  }
}

export function setUser(state, user) {
  // Vue.set(this.state, 'user', user)
  state.user = user;
}
