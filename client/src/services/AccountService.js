import Api from "./Api";

export default {
  fetchUserData(userId) {
    return Api().get("userAccountData", {
      params: userId
    })
  },
  editName(name, userId) {
    return Api().post("userAccountEditName", name, userId)
  },
  editUsername(userName, userId) {
    return Api().post("userAccountEditUsername", userName, userId)
  },
  editPassword(password, repeat_password, userId) {
    return Api().post("userAccountEditPassword", password, repeat_password, userId)
  },
  editEmail(email, userId) {
    return Api().post("userAccountEditEmail", email, userId)
  }
};
