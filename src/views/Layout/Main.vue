<template>
  <section class="">
    <Menu></Menu>
    <div class="w-full h-full p-2 mt-36">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup>
import Menu from "@/components/Menu/Main.vue";
</script>

<style scoped>
.bg-quanta-shop {
  background-color: #286874;
}

.bg-quanta-shop-secondary {
  background-color: #98c73a;
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */

.offcanvas {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
