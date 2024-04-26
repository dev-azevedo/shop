<template>
  <div class="">
    <div
      v-if="categorias.length == 0"
      class="w-56 p-4 rounded-md bg-gray-200 animate-pulse mb-5"
    ></div>
    <h3 v-else class="font-bold text-2xl mb-5 text-quanta-shop">Categorias</h3>

    <!-- Skeleton loading -->
    <carousel
      v-if="categorias.length == 0"
      v-bind="settings"
      :wrap-around="true"
      :items-to-show="quantidadeDeCard"
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
      :wrap-around="true"
      :items-to-show="quantidadeDeCard"
    >
      <slide
        v-for="categoria in categorias"
        :key="categoria.idCategoria"
        class="p-0 m-0 hover:opacity-50 ease-in duration-200"
      >
        <router-link
          :to="{
            name: 'categoria',
            params: {
              idCategoria: categoria.idCategoria,
              nomeCategoria: categoria.nome,
            },
          }"
          class="rounded-xl flex justify-top items-center flex-col h-52"
        >
          <div
            class="bg-quanta-shop h-24 w-24 rounded-full flex justify-center items-center"
          >
            <ShoppingCart size="50" color="#FFFFFF" />
          </div>
          <p class="font-semibold">
            {{ categoria.nome }}
          </p>
        </router-link>
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
import { ShoppingCart } from "lucide-vue-next";

const settings = {
  itemsToShow: 1,
  snapAlign: "left",
};

const categorias = ref([]);

const quantidadeDeCard = ref(8);

onMounted(() => {
  obterCategorias();

  if (window.innerWidth <= 760) return (quantidadeDeCard.value = 2);

  return (quantidadeDeCard.value = 5);
});

const obterCategorias = async () => {
  const { data } = await api.post("Anunciante/obterCategorias/", { nome: "" });

  categorias.value = data;
};
</script>

<style lang="scss" scoped></style>
