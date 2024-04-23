<template>
  <div class="px-5 2xl:px-96">
    <div
      class="w-64 p-4 rounded-md bg-gray-200 animate-pulse"
      v-if="!props.title"
    ></div>
    <div v-else class="flex flex-col md:flex-row justify-between items-center">
      <h3 class="font-bold text-2xl mb-5 text-quanta-shop">
        {{ props.title }}
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

    <carousel
      v-if="!anuncios"
      v-bind="settings"
      :wrap-around="true"
      :items-to-show="quantidadeDeCard"
    >
      <slide v-for="slide in 12" :key="slide" class="w-full rounded-xl">
        <ItemCarousel />
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <carousel
      v-else
      v-bind="settings"
      :wrap-around="true"
      :items-to-show="quantidadeDeCard"
    >
      <slide
        v-for="(anuncio, index) in anuncios"
        :key="index"
        class="w-full rounded-xl"
      >
        <ItemCarousel :anuncio="anuncio" :nomeCategoria="props.title" />
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
import { defineProps, onMounted, ref } from "vue";
import ItemCarousel from "./ItemCarousel.vue";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const quantidadeDeCard = ref(2);
onMounted(() => {
  if (window.innerWidth <= 760) return (quantidadeDeCard.value = 1);

  return (quantidadeDeCard.value = 4);
});

const props = defineProps({
  title: String,
  idCategoria: Number,
  anuncios: Array,
});
</script>

<style lang="scss" scoped></style>
