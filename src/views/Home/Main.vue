<template>
  <section>
    <BannerHone />
    <div v-if="maioresCategorias.length > 0">
      <CarouselItems
        v-for="categoria in maioresCategorias"
        :key="categoria.idCategoria"
        :title="categoria.nome"
        :anuncios="categoria.anuncios"
        class="mt-10"
      />
    </div>
    <p>Banner</p>
    <p>Destaques</p>
    <p>Oferta Relâmpago</p>
    <p>Categorias de sites parceiros</p>
  </section>
</template>

<script setup>
import BannerHone from "@/components/BannerHome/Main.vue";
import CarouselItems from "@/components/CarouselItems/Main.vue";
import { onMounted, ref } from "vue";
import { api } from "@/services/Api/api.js";

const maioresCategorias = ref([]);

onMounted(() => {
  obterCategorias();
});

const obterCategorias = async () => {
  console.log(api);
  const { data } = await api.post("Anunciante/obterCategorias/", { nome: "" });

  //Ordenei a lista por numero de categorias e peguei as 6 que tem mais
  data.sort(
    (a, b) => b.categoriaAnunciante.length - a.categoriaAnunciante.length
  );
  maioresCategorias.value = data.slice(0, 6);

  maioresCategorias.value.map(async (categoria) => {
    categoria.anuncios = await buscarItemDaCategoria(categoria.idCategoria);
    console.log("itensDaCategoria", categoria.anuncios);
  });

  console.log(maioresCategorias.value);
};

const buscarItemDaCategoria = async (idCategoria) => {
  const dadoCategoria = {
    descricao: "",
    idCategoria: idCategoria,
    page: 1,
    quantidade: 12,
    tipoAnunciante: [],
    totalPaginas: 1,
  };

  const { data } = await api.post("Anunciante/obterAnuncios/", dadoCategoria);
  return data.anunciantes;
};
</script>

<style lang="scss" scoped></style>
