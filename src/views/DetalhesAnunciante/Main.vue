<template>
  <section>
    <div class="-mt-10 xl:mt-auto my-5 w-full text-end z-auto">
      <button
        @click="router.back()"
        class="bg-quanta-shop ml-auto text-white py-2 px-4 rounded-md"
      >
        Voltar
      </button>
    </div>
    <!-- Header skeleton loading -->
    <div
      v-if="loading"
      class="w-full p-10 bg-gray-200 rounded-md animate-pulse"
    >
      <div
        class="flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 p-3"
      >
        <div
          class="flex flex-col items-center gap-1 md:items-start order-2 md:order-1"
        >
          <span class="text-4xl w-56 rounded-md p-3 bg-gray-400"></span>
          <span class="text-md w-40 rounded-md p-2 bg-gray-400"></span>
        </div>

        <div
          class="bg-quanta-shop p-4 rounded-full opacity-65 order-1 md:order-2"
        >
          <Store :size="64" class="text-gray-50" />
        </div>
      </div>
    </div>

    <header
      v-else
      class="w-full px-10 bg-quanta-shop-secondary-30 rounded-md py-5"
    >
      <div
        class="flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 p-3"
      >
        <div
          class="flex flex-col items-center md:items-start order-2 md:order-1"
        >
          <span class="text-4xl"
            >Anunciante {{ dadosDoCredenciado.estabelecimento }}</span
          >
          <span class="text-md text-gray-500"
            >até {{ dadosDoCredenciado.percentualCashback }}% de cashback</span
          >
          <span class="text-sm text-gray-500 text-center lg:text-left"
            >Cupom nome_anunciante{{}}: confira todos os cupons de desconto
          </span>
        </div>

        <div
          v-if="dadosDoCredenciado.logoUrl"
          class="w-44 h-44 flex justify-center items-center rounded-md order-1 md:order-2"
        >
          <img
            :src="dadosDoCredenciado.logoUrl"
            alt=""
            class="rounded-md mx-auto"
          />
        </div>

        <div v-else>
          <div class="bg-quanta-shop p-4 rounded-full opacity-65">
            <Store :size="64" class="text-gray-50" />
          </div>
        </div>
      </div>
    </header>

    <div class="mt-10">
      <div class="w-full flex flex-col justify-center items-center gap-5">
        <CardCupom v-for="item in 5" :key="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
// import { api } from "@/services/api";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Store } from "lucide-vue-next";
import { toTop } from "@/services/helper";
import CardCupom from "@/components/CardCupom/Main.vue";

const route = useRoute();
const router = useRouter();

const idAnunciante = route.params.id;
const loading = ref(Boolean(false));
const dadosDoCredenciado = ref(Object());

onMounted(() => {
  toTop();
  console.log(idAnunciante);
  // dadoDoCredenciado();
});

// const copiar = (item, mensagemToast) => {
//   const tempInput = document.createElement("textarea");
//   tempInput.value = item;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempInput);
//   return toast(mensagemToast, {
//     type: "success",
//     autoClose: 3000,
//   });
// };

// const dadoDoCredenciado = async () => {
//   try {
//     loading.value = true;
//     const { data } = await api.get(
//       `Credenciamento/obterDadosLojaCredenciada/${idCredenciamento}`
//     );
//     dadosDoCredenciado.value = data;
//     console.log(data);
//   } catch (err) {
//     if (err?.response && err?.response?.data) {
//       const erros = err.response.data?.erros;
//       erros.forEach((erro) => {
//         return toast(erro.mensagem, {
//           type: "error",
//           autoClose: false,
//         });
//       });
//     }

//     return toast("Algo deu errado, entre em contato com o suporte!", {
//       type: "error",
//       autoClose: false,
//     });
//   } finally {
//     loading.value = false;
//   }
// };
</script>

<style lang="scss" scoped></style>
