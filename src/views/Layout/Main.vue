<template>
  <section class="">
    <Menu></Menu>
    <div class="w-full h-full min-h-screen p-2 mt-36 mb-10">
      <router-view class="px-10 2xl:px-80"></router-view>
    </div>
    <Footer class="px-10 2xl:px-80"></Footer>
  </section>
</template>

<script setup>
import Menu from "@/components/Menu/Main.vue";
import Footer from "@/components/Footer/Main.vue";
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
