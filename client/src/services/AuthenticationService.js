import Api from "./Api";

export default {
  registerUser(credentials) {
    return Api().post("registerUser", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  }
};
