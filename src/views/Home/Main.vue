<template>
  <section class="px-10 2xl:px-80">
    <BannerHone class="w-full" />
    <CarrosselCategorias class="mt-10" />
    <div v-if="maioresCategorias.length === 0">
      <CarrosselItems v-for="carrossel in 6" :key="carrossel" class="mt-10" />
    </div>
    <div v-else>
      <CarrosselItems
        v-for="categoria in maioresCategorias"
        :key="categoria.idCategoria"
        :title="categoria.nome"
        :idCategoria="categoria.idCategoria"
        :anuncios="categoria.anuncios"
        class="mt-10"
      />
    </div>
    <PerguntasFrequentes />
  </section>
</template>

<script setup>
import BannerHone from "@/components/BannerHome/Main.vue";
import CarrosselItems from "@/components/CarrosselItems/Main.vue";
import CarrosselCategorias from "@/components/CarrosselCategorias/Main.vue";
import { onMounted, ref } from "vue";
import { api } from "@/services/api.js";
import { buscarItemDaCategoria, toTop } from "@/services/helper.js";
import PerguntasFrequentes from "@/components/PerguntasFrequentes/Main.vue";

const maioresCategorias = ref([]);

onMounted(() => {
  toTop();
  obterCategorias();
});

const obterCategorias = async () => {
  const { data } = await api.post("Anunciante/obterCategorias/", { nome: "" });

  //Ordenei a lista por numero de categorias e peguei as 6 que tem mais
  if (data) {
    console.log(data);
    maioresCategorias.value = data.slice(0, 8);

    maioresCategorias.value.map(async (categoria) => {
      const dados = await buscarItemDaCategoria(categoria.idCategoria);
      categoria.anuncios = dados.anunciantes;
    });
  }
};
</script>

<style lang="scss" scoped></style>
