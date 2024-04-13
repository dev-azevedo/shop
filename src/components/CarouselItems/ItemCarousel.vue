<template>
  <div
    class="rounded-xl bg-gray-50 flex flex-col justify-center items-center h-80"
  >
    <div class="rounded-t-xl w-full h-1/2 flex">
      <img
        :src="props.anuncio.imagemUrl"
        class="w-full"
        alt="bg-center bg-cover bg-contain"
      />
    </div>
    <div
      class="rounded-b-xl w-full h-1/2 p-2 flex flex-col items-start justify-between"
    >
      <h2 class="font-semibold text-gray-700 text-start">
        {{ props.anuncio.nome }}
      </h2>

      <div class="flex w-full items-end bg-gray-50 rounded-lg p-1">
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

const props = defineProps(["anuncio"]);

const tipoCashBack = {
  percentage: "%",
};
</script>

<style lang="scss" scoped></style>
