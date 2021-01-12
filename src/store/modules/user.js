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
      state.user = null;
      state.accessToken = null;
      // localStorage.removeItem("user");
      // localStorage.removeItem("accessToken");
      localStorage.clear();
      router.push({ name: "Login" });
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
        router.push({ name: "Home" });
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
