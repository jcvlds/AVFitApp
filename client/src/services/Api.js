import axios from "axios";
import { Store } from '../store/index'

export default () => {
  // console.log(Store.state)
  const token = Store.state.token
  if (token) {
    return axios.create({
      baseURL: 'http://localhost:8081/',
      headers: {
      //  Authorization: `bearer ${token.token}`
       Authorization: `bearer ${Store.state.token.token}`
      }
    });
  } else {
    return axios.create({
      baseURL: 'http://localhost:8081/'
    });
  }
};

// baseURL: 'http://localhost:8081/',
// headers: {
//  Authorization: `Bearer ${store.state.token}`
// }
