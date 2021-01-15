import { createRouter, createWebHashHistory } from "vue-router";
import appLeftSidebar from "@/components/shared/Sidebars/appLeftSidebar";
import appRightSidebar from "@/components/shared/Sidebars/appRightSidebar";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    // component: () => import("../views/Home.vue"),
    components: {
      default: () => import("../views/Home.vue"),
      appLeftSidebar,
      appRightSidebar,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    // component: () => import("../views/Profile.vue"),
    components: {
      default: () => import("../views/Profile.vue"),
      appLeftSidebar,
      appRightSidebar,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Giriş yapmış mı?
  let user,
    accessToken = null;
  let isAuthenticated = false;

  if (localStorage?.user) user = JSON.parse(localStorage?.user);
  if (localStorage?.accessToken) accessToken = localStorage?.accessToken;

  // Store populate
  if (user && accessToken && !store.getters["user/isAuthenticated"]) {
    store.commit("user/setAccessToken", accessToken);
    store.commit("user/setUser", user);
  }

  isAuthenticated = store.getters["user/isAuthenticated"];

  // Auth değilse ve Login sayfasına gidiyorsa gitmesine izin var..
  if (!isAuthenticated && to.name === "Login") next();
  // Auth değilse ve Login sayfası haricinde bir sayfaya gidiyorsa gitmesine izin var..
  if (!isAuthenticated && to.name !== "Login") next({ name: "Login" });
  // Auth olmuşsa ve Login sayfası haricinde bir yere gitmek istiyorsa.. izin ver..
  if (isAuthenticated && to.name !== "Login") next();
  // Auth olmuşsa ve Login sayfasına gitmek istiyorsa izin VERME!!!
  if (isAuthenticated && to.name === "Login") next({ name: "Home" });
});

export default router;
