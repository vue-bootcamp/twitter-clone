<template>
  <!-- Teleport Content -->
  <div id="modalContent"></div>
  <!-- !Teleport Content -->
  <div class="wrapper">
    <router-view name="appLeftSidebar"></router-view>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <router-view name="appRightSidebar"></router-view>
  </div>
</template>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>
