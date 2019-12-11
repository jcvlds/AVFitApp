const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "home", component: () => import("pages/Index.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "register", component: () => import("pages/Register.vue") }]
  },
  {
    path: "/login",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "login", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/workouts",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "workouts", component: () => import("pages/Workouts.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/nutrition",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "nutrition", component: () => import("pages/Nutrition.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/check-in",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "check-in", component: () => import("pages/Check-in.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/account-info",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "account-info", component: () => import("pages/AccountInfo.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/body-stats",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "body-stats", component: () => import("pages/BodyStats.vue") }],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/subscription",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "", name: "subscription", component: () => import("pages/Subscription.vue") }],
    meta: {
      requiresAuth: true
    }
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
