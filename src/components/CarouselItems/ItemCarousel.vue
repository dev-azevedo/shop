<template>
  <div
    v-if="!anuncio"
    class="animate-pulse rounded-xl shadow-lg m-5 bg-gray-200 flex flex-col justify-center items-center h-96 w-80"
  ></div>

  <div
    v-else
    class="rounded-xl shadow-lg m-5 border flex flex-col justify-center items-center h-96 w-96"
    :class="{ 'animate-pulse': !anuncio }"
  >
    <div
      class="flex flex-col xl:flex-row items-center justify-between w-full xl:items-start gap-2 pt-5 px-5 text-gray-400"
    >
      <h3 class="order-2 xl:order-1">{{ props.nomeCategoria }}</h3>
      <Store class="order-1 xl:order-2" />
    </div>
    <div class="w-full h-1/2 flex items-center justify-center">
      <img
        :src="props.anuncio.imagemUrl"
        class="rounded-md w-32 h-32"
        alt="bg-center bg-cover"
      />
    </div>
    <div
      class="rounded-b-xl w-full h-1/2 flex flex-col items-center xl:items-start justify-between"
    >
      <h2
        class="font-medium xl:pl-5 text-quanta-shop text-center xl:text-start"
      >
        {{ props.anuncio.nome }}
      </h2>

      <div class="w-full text-start">
        <p class="text-gray-400 text-center xl:text-start xl:pl-5 mb-3">
          Aproveite esta oportunidade
        </p>

        <button
          class="w-full text-start py-1 bg-gray-100 border-1 border-t-1 border-gray-800 rounded-b-md"
        >
          <p
            class="text-sm flex items-center justify-center xl:justify-start gap-1 p-1 xl:pl-5"
          >
            {{ props.anuncio.cashback
            }}{{ tipoCashBack[props.anuncio.tipoCashback] }} de Cashback
            <CircleDollarSign :size="16" :color="colors.secondary" />
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { CircleDollarSign, Store } from "lucide-vue-next";
import colors from "@/services/colors";

const props = defineProps(["anuncio", "nomeCategoria"]);

const tipoCashBack = {
  percentage: "%",
};
</script>

<style lang="scss" scoped></style>
