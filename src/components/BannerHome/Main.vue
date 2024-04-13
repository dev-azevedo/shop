<template>
  <div class="px-96">
    <carousel :autoplay="2000" :wrap-around="true" :items-to-show="1">
      <slide
        v-for="slide in 3"
        :key="slide"
        class="w-full bg-blue-300 rounded-xl"
      >
        <img
          class="bg-cover bg-no-repeat bg-center w-96"
          src="https://media.gettyimages.com/id/1304783400/pt/foto/cute-little-girl-doing-her-sisters-hair-at-home.jpg?s=2048x2048&w=gi&k=20&c=4nMmtQ29QoNFbEaT6QCgXAFtR7gKs5kuezIPYVE2TQk="
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style lang="scss" scoped></style>
