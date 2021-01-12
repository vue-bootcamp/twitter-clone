<template>
  <div class="left-side">
    <div class="w-100">
      <div class="logo">
        <a href="#">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      <ul class="navigation">
        <li>
          <router-link to="/">
            <i class="fa fa-home" aria-hidden="true"></i> Anasayfa
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-hashtag" aria-hidden="true"></i> Keşfet
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-bell-o" aria-hidden="true"></i> Bildirimler
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-envelope-o" aria-hidden="true"></i> Mesajlar
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-bookmark-o" aria-hidden="true"></i> Yer İşaretleri
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-list-alt" aria-hidden="true"></i> Listeler
          </a>
        </li>
        <li>
          <router-link to="/profile">
            <i class="fa fa-user-o" aria-hidden="true"></i> Profil
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-plus-square-o" aria-hidden="true"></i> Daha fazla
          </a>
        </li>
      </ul>
      <button class="tweet-button w-90">Tweetle</button>
    </div>
    <div class="user-info">
      <a href="#" @click.prevent="logout">
        <div class="user d-flex justify-content-start align-items-center">
          <div class="profile-photo">
            <img
              src="https://pbs.twimg.com/profile_images/1153131318454169601/b3bdzrDM_200x200.jpg"
              alt=""
            />
          </div>
          <div class="profile-name">
            <p>Gökhan Kandemir</p>
            <p>@gkandemir</p>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="r-jwli3a r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    // logout(){
    //   this.$store.commit("user/logout")
    // }
    ...mapMutations({
      logout: "user/logout",
    }),
  },
};
</script>
