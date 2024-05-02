<template>
  <div>
    <div
      class="w-64 p-4 rounded-md bg-gray-200 animate-pulse"
      v-if="!props.title"
    ></div>
    <div v-else class="flex flex-col md:flex-row justify-between items-center">
      <h3
        class="font-bold text-2xl mb-5 text-center xl:text-start text-quanta-shop"
      >
        {{ capitalize(props.title) }}
      </h3>

      <router-link
        :to="{
          name: 'categoria',
          params: {
            idCategoria: props.idCategoria,
            nomeCategoria: props.title,
          },
        }"
        class="bg-gray-100 rounded-md p-2 text-quanta-shop-secondary hover:bg-gray-200 ease-in duration-200"
      >
        Mostrar todos os anúncios
      </router-link>
    </div>

    <carousel v-if="!anuncios" :breakpoints="breakpoints">
      <slide v-for="slide in 12" :key="slide" class="w-full rounded-xl">
        <ItemCarrossel />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <carousel
      v-else
      :breakpoints="breakpoints"
      :wrapAround="anuncios.length > 4 ? true : false"
      :transition="500"
    >
      <slide
        v-for="(anuncio, index) in anuncios"
        :key="index"
        class="w-full rounded-xl"
      >
        <ItemCarrossel :anuncio="anuncio" :nomeCategoria="props.title" />
      </slide>

      <template #addons> <navigation /> </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { defineProps } from "vue";
import ItemCarrossel from "./ItemCarrossel.vue";
import { capitalize } from "@/services/helper";

const breakpoints = {
  420: {
    itemsToShow: 1,
    snapAlign: "center",
  },

  700: {
    itemsToShow: 3,
    snapAlign: "start",
  },

  1024: {
    itemsToShow: 4,
    snapAlign: "start",
  },
};

const props = defineProps({
  title: String,
  idCategoria: Number,
  anuncios: Array,
});
</script>

<style lang="scss" scoped></style>
