<template>
  <div class="tweet-detail">
    <div v-html="tweet.tweet"></div>
    <img v-if="hasImageMedia" :src="tweet.media" alt="" width="100%" />
  </div>
</template>

<script>
export default {
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },

  computed: {
    hasImageMedia() {
      return this.tweet.hasOwnProperty("media") && this.tweet.media !== null;
    },
  },
};
</script>
