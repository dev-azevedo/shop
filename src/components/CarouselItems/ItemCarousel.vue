<template>
  <div
    v-if="!anuncio"
    class="animate-pulse rounded-xl shadow-lg m-5 bg-gray-200 flex flex-col justify-center items-center h-96 w-96"
  ></div>

  <div
    v-else
    class="rounded-xl shadow-lg m-5 bg-gray-50 flex flex-col justify-center items-center h-96 w-96"
    :class="{ 'animate-pulse': !anuncio }"
  >
    <div class="flex justify-start w-full items-start pt-5 pl-5 text-gray-400">
      <h3>{{ props.nomeCategoria }}</h3>
    </div>
    <div class="w-1/2 h-1/2 flex items-center justify-center">
      <img
        :src="props.anuncio.imagemUrl"
        class="rounded-full w-28 h-28"
        alt="bg-center bg-contain"
      />
    </div>
    <div
      class="rounded-b-xl h-1/2 p-2 flex flex-col items-start justify-between"
    >
      <h2 class="font-semibold text-gray-700 text-start">
        {{ props.anuncio.nome }}
      </h2>

      <div
        class="flex w-full justify-center items-center bg-quanta-shop rounded-lg p-1"
      >
        <p class="font-semibold text-quanta-shop-secondary text-center">
          Cashback de até: {{ props.anuncio.cashback
          }}{{ tipoCashBack[props.anuncio.tipoCashback] }}
        </p>
      </div>

      <div class="p-x text-center border-1 border-t-1 border-gray-800">
        <p class="text-sm text-center">Aproveite esta oportunidade</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["anuncio", "nomeCategoria"]);

const tipoCashBack = {
  percentage: "%",
};
</script>

<style lang="scss" scoped></style>
