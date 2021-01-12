<template>
  <div class="content">
    <h3 class="title">En Son Tweetler</h3>
    <!-- Tweet At Başlangıcı -->
    <send-tweet-container @new-tweet-event="tweets.unshift($event)" />
    <!-- Tweet At Bitişi -->
    <!-- Tweetler Başlangıcı -->
    <tweet-container v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
    <!-- Tweetler Bitişi -->
  </div>
</template>

<script>
import sendTweetContainer from "@/components/Home/sendTweetContainer";
import { mapGetters } from "vuex";
import { appAuthAxios } from "@/utils/appAxioses";
export default {
  components: {
    sendTweetContainer,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    appAuthAxios
      .get("/")
      .then((tweets_response) => {
        this.tweets = tweets_response?.data?.sort((a, b) => {
          const orderA = new Date(a.created_at);
          const orderB = new Date(b.created_at);

          let comparison = 0;
          if (orderA > orderB) {
            comparison = -1;
          } else if (orderB > orderA) {
            comparison = 1;
          }
          return comparison;
        });
      })
      .catch((e) => console.log(e));
  },
};
</script>
