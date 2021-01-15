<template>
  <div class="tweet">
    <tweet-user-image :profile_picture="profileImage" />
    <div class="tweet-content">
      <tweet-user-info :user="tweet.user" :created_at="tweet.created_at" />
      <tweet-details :tweet="tweet" />
      <tweet-actions :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import tweetActions from "@/components/shared/Tweet/tweetActions";
import tweetUserImage from "@/components/shared/Tweet/tweetUserImage";
import tweetUserInfo from "@/components/shared/Tweet/tweetUserInfo";
import tweetDetails from "@/components/shared/Tweet/tweetDetails";
export default {
  components: {
    tweetActions,
    tweetUserImage,
    tweetUserInfo,
    tweetDetails,
  },
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },

  created() {
    // console.log("this.tweet", this.tweet);
  },
  computed: {
    profileImage() {
      return this.tweet?.user?.profile_picture || "/default-user.png";
    },
  },
};
</script>
