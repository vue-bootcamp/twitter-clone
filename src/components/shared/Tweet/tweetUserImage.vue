<template>
  <div class="profile-photo">
    <img :src="profile_picture" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    profile_picture: {
      type: [String, null],
      required: false,
      default: "/default-user.png",
    },
  },
};
</script>
