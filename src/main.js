import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/style.css";
import "@/assets/css/font-awesome.min.css";

import tweetContainer from "@/components/shared/Tweet/tweetContainer";

createApp(App)
  .use(store)
  .use(router)
  .component("tweet-container", tweetContainer)
  .mount("#app");
