<template>
  <section class="px-10 md:px-20 2xl:px-80">
    <p class="text-gray-400">
      <router-link to="/">Home</router-link> > Categorias
    </p>

    <h2 class="text-4xl mt-5 font-bold">{{ nomeCategoria }}</h2>

    <div class="flex justify-between mt-10 pl-5 text-xl font-semibold">
      <p>{{ calcTotalDeItens }} Anúncios</p>

      <p>filtro</p>
    </div>

    <transition name="fade" class="mt-5">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center"
      >
        <ItemCarrossel
          v-for="anuncio in anunciantes"
          :key="anuncio.idCategoria"
          :anuncio="anuncio"
          :nomeCategoria="nomeCategoria"
          :loading="loadingCard"
          class="w-auto"
        />
      </div>
    </transition>

    <div class="w-full flex justify-center lg:justify-start">
      <nav class="flex items-center gap-1" v-if="totalPaginas > 1">
        <button
          v-show="pagina > 1"
          class="shadow-xl bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center"
          @click="pagina = 1"
        >
          <ChevronsLeft :color="colors.primary" />
        </button>
        <button
          v-show="pagina > 1"
          class="shadow-xl bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center"
          @click="pagina--"
        >
          <ChevronLeft :color="colors.primary" />
        </button>
        <button
          class="shadow-xl bg-gray-100 text-quanta-shop rounded-md h-10 w-10 flex justify-center items-center"
        >
          {{ pagina }}
        </button>

        <button
          v-show="pagina != totalPaginas"
          class="shadow-xl bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center"
          @click="pagina++"
        >
          <ChevronRight :color="colors.primary" />
        </button>
        <button
          v-show="pagina != totalPaginas"
          class="shadow-xl bg-gray-100 rounded-md h-10 w-10 flex justify-center items-center"
          @click="pagina = totalPaginas"
        >
          <ChevronsRight :color="colors.primary" />
        </button>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { buscarItemDaCategoria, toTop } from "@/services/helper.js";
import ItemCarrossel from "@/components/CarrosselItems/ItemCarrossel.vue";
import colors from "@/services/colors";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-vue-next";

const route = useRoute();
const idCategoria = computed(() => route.params.idCategoria);
const nomeCategoria = computed(() => route.params.nomeCategoria);
const anunciantes = ref([]);
const pagina = ref(1);
const totalPaginas = ref(0);
const totalItens = ref(0);
const loadingCard = ref(false);

// const calcTotalDeItens = computed(() =>
//   anunciantes.value.length == 12 ? totalItens.value : anunciantes.value.length
// );
const calcTotalDeItens = computed(() => 12);

onMounted(() => {
  toTop();
  buscarItens();
});

watch([pagina, idCategoria], () => {
  toTop();
  buscarItens();
});

const buscarItens = async () => {
  try {
    loadingCard.value = true;

    if (idCategoria.value) {
      const dados = await buscarItemDaCategoria(
        +idCategoria.value,
        pagina.value,
        totalPaginas.value
      );

      totalItens.value = dados.quantidade * dados.totalPaginas;

      anunciantes.value = dados.anunciantes;
      totalPaginas.value = dados.totalPaginas;
    }
  } catch {
    console.log("algo deu errado");
  } finally {
    setTimeout(() => {
      loadingCard.value = false;
    }, 500);
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
