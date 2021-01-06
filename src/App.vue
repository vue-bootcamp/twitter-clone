<template>
  <div class="wrapper">
    <app-left-sidebar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <app-right-sidebar />
  </div>
</template>
<script>
import appLeftSidebar from "@/components/shared/Sidebars/appLeftSidebar";
import appRightSidebar from "@/components/shared/Sidebars/appRightSidebar";
export default {
  components: {
    appLeftSidebar,
    appRightSidebar,
  },
};
</script>

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
