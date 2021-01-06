<template>
  <div class="left-side">
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
</template>
