<template>
  <div class="tweet">
    <tweet-user-image />
    <div class="tweet-content">
      <tweet-user-info />
      <tweet-details />
      <tweet-actions />
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
};
</script>
