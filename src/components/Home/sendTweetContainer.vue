<template>
  <div class="tweet-send">
    <div class="profile-photo">
      <img :src="profilePicture" alt="" />
    </div>
    <div class="tweet-input">
      <textarea placeholder="Neler Oluyor?" v-model="tweet"></textarea>
    </div>
    <div class="tweet-send-button">
      <button class="tweet-button" @click="sendTweet">Tweetle</button>
    </div>
  </div>
</template>
<script>
import { appAuthAxios } from "@/utils/appAxioses";
import { mapGetters } from "vuex";
export default {
  emits: ["new-tweet-event"],
  data() {
    return {
      tweet: null,
    };
  },
  methods: {
    sendTweet() {
      appAuthAxios
        .post("/tweet", { tweet: this.tweet })
        .then((tweet_response) => {
          console.log("tweet_response", tweet_response);
          this.$emit("new-tweet-event", tweet_response?.data?.tweet);
          this.tweet = null;
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "user/getCurrentUser",
    }),
    profilePicture() {
      return this?.currentUser?.profile_picture || "/default-user.png";
    },
  },
};
</script>
