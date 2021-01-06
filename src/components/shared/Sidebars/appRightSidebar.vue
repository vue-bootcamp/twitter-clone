<template>
  <div class="right-side">
    <app-tweet-search />
    <app-trend-topic />
    <app-follow-list />
  </div>
</template>

<script>
import appTrendTopic from "@/components/shared/appTrendTopic";
import appFollowList from "@/components/shared/appFollowList";
import appTweetSearch from "@/components/shared/appTweetSearch";
export default {
  components: {
    appTrendTopic,
    appFollowList,
    appTweetSearch,
  },
};
</script>
