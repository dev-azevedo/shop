<template>
  <div class="2xl:px-96">
    <h3 class="font-bold text-2xl mb-5">{{ props.title }}</h3>
    <carousel v-bind="settings" :wrap-around="true" :items-to-show="4">
      <slide
        v-for="(anuncio, index) in anuncios"
        :key="index"
        class="w-full rounded-xl"
      >
        <ItemCarousel :anuncio="anuncio" />
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
import { defineProps } from "vue";
import ItemCarousel from "./ItemCarousel.vue";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const props = defineProps(["title", "anuncios"]);
</script>

<style lang="scss" scoped></style>
