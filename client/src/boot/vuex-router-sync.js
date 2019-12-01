/* eslint-disable */
// import something here
import { sync } from "vuex-router-sync";

// "async" is optional
export default async ({ app, router, store, Vue }) => {
  // something to do
  sync(store, router);
};
