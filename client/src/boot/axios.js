import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.baseURL = 'http://localhost:8081/'

// const token = localStorage.getItem('token');
//       if (token) {
//         Vue.prototype.$axios.defaults.headers.common['Authorization'] = token
//       }