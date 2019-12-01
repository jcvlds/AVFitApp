const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/register",
    // name: "Register",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Register.vue") }]
  },
  {
    path: "/login",
    // name: "Login",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/user",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      {
        path: "profile",
        component: () => import("pages/Login.vue")
      },
      {
        path: "workouts",
        component: () => import("pages/Login.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
