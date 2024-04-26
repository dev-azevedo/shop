<template>
  <div>
    <!-- Skeleton loading -->
    <carousel
      v-if="anunciantesAleatorios.length == 0"
      v-bind="settings"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <slide v-for="slide in 12" :key="slide" class="w-full rounded-xl">
        <div
          class="animate-pulse rounded-xl flex justify-center items-center flex-col"
        >
          <div
            class="bg-gray-200 h-24 w-24 rounded-full flex justify-center items-center"
          ></div>
          <div class="mt-2 rounded-md bg-gray-200 w-32 p-2"></div>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <carousel
      v-else
      v-bind="settings"
      :autoplay="1000"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <slide
        v-for="anuncio in anunciantesAleatorios"
        :key="anuncio.idAnunciante"
        class="p-0 m-0 hover:opacity-50 ease-in duration-200"
      >
        <div class="rounded-xl flex justify-center items-center flex-col h-52">
          <img :src="anuncio.imagemUrl" alt="" />
        </div>
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
import { onMounted, ref } from "vue";
import { api } from "@/services/api";

const settings = {
  itemsToShow: 1,
  snapAlign: "left",
};

const anunciantesAleatorios = ref([]);

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

  1920: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};

onMounted(() => {
  getAnuciantesAleatorio();
});

const getAnuciantesAleatorio = async () => {
  const { data } = await api.get("Anunciante/obterAnunciantesAleatorio/");

  anunciantesAleatorios.value = data;
};
</script>

<style lang="scss" scoped></style>
