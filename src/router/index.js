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

  if (localStorage?.user) user = JSON.parse(localStorage.user);
  if (localStorage?.accessToken) accessToken = localStorage.accessToken;
  // Routing yapiyor olabilir. Store kontrol et..
  if (!store.getters["user/isAuthenticated"]) {
    // Sayfayı yenilemiş olabilir. LocalStorage Kontrol et..
    if (!user && !accessToken) {
      // Login Harici bir sayfaya girmeye calisiyorsa..
      if (to.name !== "Login") {
        next({ name: "Login" });
      } else {
        next();
      }
    } else {
      store.commit("user/setAccessToken", accessToken);
      store.commit("user/setUser", user);
      if (to.name !== "Login") next();
      else next({ name: "Home" });
    }
  } else {
    if (to.name !== "Login") next();
    else next({ name: "Home" });
  }
});

export default router;
