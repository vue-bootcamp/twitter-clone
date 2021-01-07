<template>
  <div class="tweet-info">
    <span>{{ user.full_name }}</span>
    <span>@{{ user.username }}</span>
    <span>{{ timesAgo }} </span>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
  },
  created() {
    moment.updateLocale("tr", {
      relativeTime: {
        future: "%s sonra",
        past: "%s önce",
        s: "şimdi",
        ss: "%dsn",
        m: "1d",
        mm: "%dd",
        h: "1s",
        hh: "%ds",
        d: "1 gün",
        dd: "%dg",
        w: "1h",
        ww: "%dh",
        M: "1a",
        MM: "%da",
        y: "1y",
        yy: "%dy",
      },
    });
  },
  computed: {
    timesAgo() {
      return moment(this.created_at).fromNow(true);
    },
  },
};
</script>
