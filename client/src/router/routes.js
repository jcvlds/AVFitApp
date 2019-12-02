const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/register",
    name: "register",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Register.vue") }]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/workouts",
    name: "workouts",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", component: () => import("pages/Workouts.vue") }]
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
