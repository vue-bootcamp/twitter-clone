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
import axios from "axios";
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
    axios
      .get("http://localhost:3000/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmVsb21lbG9rZWxvIiwiJF9fIjp7InN0cmljdE1vZGUiOnRydWUsInNlbGVjdGVkIjp7fSwiZ2V0dGVycyI6e30sIl9pZCI6IjVmNjJhNTNkMTUxNDE0MzgxNjMzMDVlOSIsIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7ImZvbGxvd2VycyI6ImluaXQiLCJmb2xsb3dpbmciOiJpbml0IiwiX2lkIjoiaW5pdCIsImZ1bGxfbmFtZSI6ImluaXQiLCJ1c2VybmFtZSI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJiaXJ0aGRheSI6ImluaXQiLCJjcmVhdGVkX2F0IjoiaW5pdCIsInVwZGF0ZWRfYXQiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJmdWxsX25hbWUiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJlbWFpbCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImJpcnRoZGF5Ijp0cnVlLCJjcmVhdGVkX2F0Ijp0cnVlLCJ1cGRhdGVkX2F0Ijp0cnVlLCJfX3YiOnRydWUsImZvbGxvd2VycyI6dHJ1ZSwiZm9sbG93aW5nIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwicGF0aHNUb1Njb3BlcyI6e30sImNhY2hlZFJlcXVpcmVkIjp7fSwiJHNldENhbGxlZCI6e30sImVtaXR0ZXIiOnsiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH0sIiRvcHRpb25zIjp7InNraXBJZCI6dHJ1ZSwiaXNOZXciOmZhbHNlLCJ3aWxsSW5pdCI6dHJ1ZSwiZGVmYXVsdHMiOnRydWV9fSwiaXNOZXciOmZhbHNlLCIkbG9jYWxzIjp7fSwiJG9wIjpudWxsLCJfZG9jIjp7ImZvbGxvd2VycyI6WyI1ZjYxNGMzMGVmOGY3MTI5MDZmMzI5M2QiXSwiZm9sbG93aW5nIjpbIjVmNjE0YzMwZWY4ZjcxMjkwNmYzMjkzZCJdLCJfaWQiOiI1ZjYyYTUzZDE1MTQxNDM4MTYzMzA1ZTkiLCJmdWxsX25hbWUiOiJGZWxha2V0dGluIEtvcmttYXoiLCJ1c2VybmFtZSI6ImZlbG9tZWxva2VsbyIsImVtYWlsIjoiZmVsb0BmZWxvLmNvbSIsInBhc3N3b3JkIjoiODJmMzc1ZTNlZGE3ZTVkNjZmOWY0MTcyMzFkYWUwMTY1YmI5Njg2Njk5YjUyMzIwOTM1ZDEzNGU5ZjFiZDhiZSIsImJpcnRoZGF5IjoiMTk5NS0wNi0wM1QwMDowMDowMC4wMDBaIiwiY3JlYXRlZF9hdCI6IjIwMjAtMDktMTZUMjM6NTI6MjkuOTIxWiIsInVwZGF0ZWRfYXQiOiIyMDIwLTA5LTE2VDIzOjUyOjI5LjkyMVoiLCJfX3YiOjd9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNjA5OTY4MjM5LCJleHAiOjE2MTA1NzMwMzl9.OFRowKXz--i4zsw1GfJ4PQc9Tzq3_iSgfvglxOAGHwc",
        },
      })
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
