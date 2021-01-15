import { appAuthAxios } from "@/utils/appAxioses";
import router from "../../router";

export default {
  namespaced: true,
  state: {
    user: null,
    accessToken: null,
  },
  mutations: {
    setAccessToken(state, pAccessToken) {
      state.accessToken = pAccessToken;
    },
    setUser(state, pUser) {
      state.user = pUser;
    },
    logout(state) {
      appAuthAxios
        .post("/logout", { token: localStorage?.accessToken })
        .then((logout_response) => {
          console.log("logout_response", logout_response);
          state.user = null;
          state.accessToken = null;
          // localStorage.removeItem("user");
          // localStorage.removeItem("accessToken");
          localStorage.clear();
          router.push({ name: "Login" });
        });
    },
  },
  actions: {
    login({ commit }, pUserInfo) {
      appAuthAxios.post("/login", pUserInfo).then((login_response) => {
        commit("setUser", login_response?.data?.user);
        commit("setAccessToken", login_response?.data?.tokens.accessToken);
        // LocalStorage Set
        localStorage.accessToken = login_response?.data?.tokens?.accessToken;
        localStorage.user = JSON.stringify(login_response?.data?.user);
        // Routing
        // setTimeout(() => {
        router.push({ name: "Home" });
        // }, 300);
      });
    },
  },
  getters: {
    getAccessToken: (state) => state.tokens?.accessToken,
    getCurrentUser: (state) => state.user,
    isAuthenticated: (state) =>
      state.user !== null && state.accessToken !== null,
  },
};
