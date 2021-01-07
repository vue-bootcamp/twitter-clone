<template>
  <div class="profile-photo">
    <img :src="profile_picture" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    profile_picture: {
      type: String,
      required: false,
      default:
        "https://pbs.twimg.com/profile_images/1153131318454169601/b3bdzrDM_200x200.jpg",
    },
  },
};
</script>
