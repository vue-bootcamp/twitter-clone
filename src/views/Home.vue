<template>
  <div class="content">
    <h3 class="title">En Son Tweetler</h3>
    <!-- Tweet At Başlangıcı -->
    <send-tweet-container />
    <!-- Tweet At Bitişi -->
    <!-- Tweetler Başlangıcı -->
    <tweet-container v-for="i in 10" :key="i" />
    <!-- Tweetler Bitişi -->
  </div>
</template>

<script>
import sendTweetContainer from "@/components/Home/sendTweetContainer";
export default {
  components: {
    sendTweetContainer,
  },
};
</script>
