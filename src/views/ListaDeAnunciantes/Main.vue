<template>
  <section class="px-96">
    <p class="text-gray-400">
      <router-link to="/">Home</router-link> > Categorias
    </p>

    <h2 class="text-4xl mt-5 font-bold">{{ nomeCategoria }}</h2>

    <div class="flex justify-between mt-10 pl-5 text-xl font-semibold">
      <p>{{ calcTotalDeItens }} Anúncios</p>

      <p>filtro</p>
    </div>

    <transition name="fade" class="mt-5">
      <div class="grid grid-cols-3 justify-center">
        <ItemCarousel
          v-for="anuncio in anunciantes"
          :key="anuncio.idCategoria"
          :anuncio="anuncio"
          :nomeCategoria="nomeCategoria"
          class="w-auto"
        />
      </div>
    </transition>

    <nav class="flex items-center gap-1" v-if="totalPaginas > 1">
      <button
        v-show="pagina > 1"
        class="bg-quanta-shop text-gray-50 rounded-md h-10 w-10 flex justify-center items-center"
        @click="pagina = 1"
      >
        <ChevronsLeft color="#FFFFFF" />
      </button>
      <button
        v-show="pagina > 1"
        class="bg-quanta-shop text-gray-50 rounded-md h-10 w-10 flex justify-center items-center"
        @click="pagina--"
      >
        <ChevronLeft color="#FFFFFF" />
      </button>
      <button
        class="bg-quanta-shop text-gray-50 rounded-md h-10 w-10 flex justify-center items-center"
      >
        {{ pagina }}
      </button>

      <button
        v-show="pagina != totalPaginas"
        class="bg-quanta-shop text-gray-50 rounded-md h-10 w-10 flex justify-center items-center"
        @click="pagina++"
      >
        <ChevronRight color="#FFFFFF" />
      </button>
      <button
        v-show="pagina != totalPaginas"
        class="bg-quanta-shop text-gray-50 rounded-md h-10 w-10 flex justify-center items-center"
        @click="pagina = totalPaginas"
      >
        <ChevronsRight color="#FFFFFF" />
      </button>
    </nav>
  </section>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { buscarItemDaCategoria } from "@/services/helper.js";
import ItemCarousel from "@/components/CarouselItems/ItemCarousel.vue";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-vue-next";

const route = useRoute();
const idCategoria = route.params.idCategoria;
const nomeCategoria = route.params.nomeCategoria;
const anunciantes = ref([]);
const pagina = ref(1);
const totalPaginas = ref(0);
const totalItens = ref(0);

// const calcTotalDeItens = computed(() =>
//   anunciantes.value.length == 12 ? totalItens.value : anunciantes.value.length
// );
const calcTotalDeItens = computed(() => 12);

onMounted(() => {
  buscarItens();
});

watch(pagina, () => {
  buscarItens();
});

const buscarItens = async () => {
  if (idCategoria) {
    const dados = await buscarItemDaCategoria(
      +idCategoria,
      pagina.value,
      totalPaginas.value
    );

    totalItens.value = dados.quantidade * dados.totalPaginas;

    console.log(dados);
    anunciantes.value = dados.anunciantes;
    totalPaginas.value = dados.totalPaginas;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
