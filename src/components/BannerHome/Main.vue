<template>
  <div class="2xl:px-96 hidden md:block">
    <!-- Skeleton loading -->
    <carousel
      :autoplay="2000"
      :wrap-around="true"
      :items-to-show="1"
      class="rounded-md"
      v-if="images.length == 0"
    >
      <slide v-for="slide in 3" :key="slide" class="hidden w-full rounded-md">
        <div
          class="p-10 bg-gray-300 w-full h-64 rounded-md animate-pulse"
        ></div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <carousel
      v-else
      :autoplay="2000"
      :wrap-around="true"
      :items-to-show="1"
      class="rounded-md"
    >
      <slide
        v-for="(img, index) in images"
        :key="index"
        class="hidden w-full rounded-md"
      >
        <img class="bg-cover bg-no-repeat bg-center rounded-md" :src="img" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>

  <div class="md:hidden -mt-10">
    <carousel
      :autoplay="2000"
      :wrap-around="true"
      :items-to-show="1"
      class="rounded-md"
    >
      <slide
        v-for="(img, index) in imagesMob"
        :key="index"
        class="hidden w-5/6 bg-blue-300 rounded-md"
      >
        <img class="bg-cover bg-no-repeat bg-center rounded-md" :src="img" />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
import banner1 from "@/assets/img/Banner-Quanta-Bank-01.4c6b3467.jpg";
import banner2 from "@/assets/img/Banner-Quanta-Bank-02.04a94fbc.jpg";
import banner3 from "@/assets/img/Banner-Quanta-Bank-03.1b2e46db.jpg";

import bannerMob1 from "@/assets/img/BannerMob-Quanta-Bank-01.300ade27.jpg";
import bannerMob2 from "@/assets/img/BannerMob-Quanta-Bank-02.3534a3bb.jpg";
import bannerMob3 from "@/assets/img/BannerMob-Quanta-Bank-03.b38faa7e.jpg";

const images = ref([banner1, banner2, banner3]);
const imagesMob = ref([bannerMob1, bannerMob2, bannerMob3]);
</script>

<style lang="scss" scoped></style>
