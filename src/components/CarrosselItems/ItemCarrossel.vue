<template>
  <div
    v-if="loading || !anuncio"
    class="animate-pulse rounded-xl shadow-lg m-5 bg-gray-200 flex flex-col justify-center items-center h-96 w-80"
  ></div>

  <div
    v-else
    class="rounded-xl shadow-lg m-5 border flex flex-col justify-center items-center h-96 w-96"
    :class="{ 'animate-pulse': !anuncio }"
  >
    <div
      class="flex flex-col xl:flex-row items-center justify-between w-full xl:items-center gap-2 pt-5 px-5 text-gray-400"
    >
      <h3 class="order-2 xl:order-1">{{ capitalize(props.nomeCategoria) }}</h3>
      <Store class="order-1 xl:order-2" />
    </div>

    <div class="w-full h-1/2 flex items-center justify-center">
      <img
        v-if="props.anuncio.imagemUrl"
        :src="props.anuncio.imagemUrl"
        class="rounded-md w-32 h-32 bg-center bg-cover"
        :alt="props.anuncio.nome"
      />
      <div v-else>
        <div class="bg-quanta-shop p-4 rounded-full opacity-65">
          <Store :size="64" class="text-gray-50" />
        </div>
      </div>
    </div>
    
    <div
      class="rounded-b-xl w-full h-1/2 flex flex-col items-center xl:items-start justify-between"
    >
      <h2
        :title="props.anuncio.nome"
        class="font-medium xl:px-5 cursor-pointer text-quanta-shop text-center xl:text-start"
      >
        {{ props.anuncio.nome }}
      </h2>

      <div class="w-full text-start">
        <p class="text-gray-400 text-sm text-center mb-1">
          Aproveite essa oportunidade
        </p>

        <button
          class="w-full text-start py-1 bg-gray-100 border-1 border-t-1 border-gray-800 rounded-b-md"
          @click="detalhesCredenciado()"
        >
          <p
            v-if="props.anuncio.tipoCashback == 'value'"
            class="text-sm flex items-center justify-center gap-1 p-1"
          >
            De {{ mascaraDinheiroReal(props.anuncio.cashbackMin) }} Até
            {{ mascaraDinheiroReal(props.anuncio.cashbackMax) }} de cashback
            <CircleDollarSign :size="16" :color="colors.secondary" />
          </p>

          <p
            v-else-if="props.anuncio.tipoCashback == null"
            class="text-sm flex items-center justify-center gap-1 p-1 xl:pl-5"
          >
            clique aqui para ver o cashback
            <CircleDollarSign :size="16" :color="colors.secondary" />
          </p>

          <p
            v-else
            class="text-sm flex items-center justify-center gap-1 p-1 xl:pl-5"
          >
            Até % {{ props.anuncio.cashback }} de cashback
            <CircleDollarSign :size="16" :color="colors.secondary" />
          </p>

          {{ props.anuncio.urlAnuncio }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { CircleDollarSign, Store } from "lucide-vue-next";
import colors from "@/services/colors";
import { capitalize, mascaraDinheiroReal } from "@/services/helper";

import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["anuncio", "nomeCategoria", "loading"]);

onMounted(() => {
  console.log(props.anuncio);
});

const detalhesCredenciado = async () => {
  // Validar idAnunciante ou idCredenciamento

  if (props.anuncio.idCredenciamento != null)
    return router.push({
      name: "detalhesCredenciado",
      params: {
        id: props.anuncio.idCredenciamento,
      },
    });

  return router.push({
    name: "detalhesAnunciante",
    params: {
      id: props.anuncio.idAnunciante,
    },
  });
};
</script>

<style lang="scss" scoped></style>
