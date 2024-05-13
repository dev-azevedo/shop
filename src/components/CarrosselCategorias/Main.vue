<template>
  <div class="">
    <div
      v-if="categorias.length == 0"
      class="w-56 p-4 rounded-md bg-gray-200 animate-pulse mb-5"
    ></div>
    <h3 v-else class="font-bold text-2xl mb-5 text-quanta-shop">
      <span>Categorias destaques</span>
    </h3>

    <!-- Skeleton loading -->
    <carousel
      v-if="categorias.length == 0"
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
      :wrap-around="true"
      :breakpoints="breakpoints"
      :transition="500"
    >
      <slide
        v-for="categoria in categorias"
        :key="categoria.idCategoria"
        class="p-0 m-0 hover:opacity-50 ease-in duration-200"
      >
        <div
          class="rounded-xl flex justify-top items-center flex-col h-52"
          @mousemove.prevent
          @mousedown.prevent
        >
          <button
            @click="acessarCategoria(categoria.idCategoria, categoria.nome)"
            class="bg-quanta-shop h-24 w-24 rounded-full flex justify-center items-center"
          >
            <ShoppingCart size="50" color="#FFFFFF" />
          </button>
          <p class="font-semibold">
            {{ categoria.nome }}
          </p>
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
import { ShoppingCart } from "lucide-vue-next";
import { useRouter } from "vue-router";
const router = useRouter();

const categorias = ref([]);

onMounted(() => {
  obterCategorias();
});

const breakpoints = {
  420: {
    itemsToShow: 2,
    snapAlign: "start",
  },

  700: {
    itemsToShow: 4,
    snapAlign: "start",
  },

  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },

  1920: {
    itemsToShow: 6,
    snapAlign: "start",
  },
};

const obterCategorias = async () => {
  const { data } = await api.get("Categoria/obterCategoriasDestaque/");
  categorias.value = data;
  return; // if (auth.getUser.token) {
  //   console.log("teste");
  // }

  // const { data } = await api.post("Anunciante/obterCategorias/", { nome: "" });

  // categorias.value = data;
};

const acessarCategoria = (idCategoria, nome) => {
  router.push({
    name: "categoria",
    params: {
      idCategoria: idCategoria,
      nomeCategoria: nome,
    },
  });
};
</script>

<style lang="scss" scoped></style>
