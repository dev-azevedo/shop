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

    <header v-else class="w-full px-10 bg-quanta-shop-secondary-30 rounded-md">
      <div
        class="flex flex-col items-center justify-center md:flex-row md:justify-between gap-4 p-3"
      >
        <div
          class="flex flex-col items-center md:items-start order-2 md:order-1"
        >
          <span class="text-4xl">{{ dadosDoCredenciado.estabelecimento }}</span>
          <span class="text-md text-gray-500"
            >até {{ dadosDoCredenciado.percentualCashback }}% de cashback</span
          >
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

    <div class="flex flex-col lg:flex-row justify-center items-center">
      <div class="w-full lg:w-1/2">
        <img src="../../assets/img/Shopping bag-amico.svg" alt="" />
      </div>
      <div
        class="w-full lg:w-1/2 flex flex-col justify-center items-center gap-5 lg:px-20"
      >
        <div
          v-if="loading"
          class="flex flex-col justify-center items-center gap-5 animate-pulse"
        >
          <div>
            <p class="text-lg font-medium text-quanta-shop">Endereço:</p>
            <p class="w-60 p-3 bg-gray-400 rounded-md"></p>
          </div>

          <div class="w-full flex flex-col gap-3">
            <button
              disabled
              class="bg-quanta-shop-secondary text-white font-medium flex justify-center gap-3 p-3 rounded-md w-full"
            >
              Copiar endereço <Copy />
            </button>

            <a
              disabled
              class="bg-quanta-shop-secondary flex justify-center gap-3 text-white font-medium p-3 rounded-md w-full"
            >
              Ver no mapa
              <MapPin />
            </a>
          </div>

          <div
            class="w-full flex flex-col justify-center items-start gap-5 mt-10"
          >
            <div class="flex gap-1 items-center">
              <p class="text-lg font-medium text-quanta-shop">Contato:</p>
              <p class="w-44 p-3 bg-gray-400 rounded-md"></p>
            </div>

            <div class="w-full">
              <button
                disabled
                class="bg-quanta-shop-secondary text-white font-medium flex justify-center gap-3 p-3 rounded-md w-full hover:opacity-50 ease-in duration-200"
              >
                Copiar telefone
                <Copy />
              </button>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col justify-center items-center gap-5">
          <div>
            <p class="text-lg font-medium text-quanta-shop">Endereço:</p>
            <p>
              {{ endereco }}
            </p>
          </div>

          <div class="w-full flex flex-col gap-3">
            <button
              @click="copiar(endereco, 'Endereço copiado com sucesso!')"
              class="bg-quanta-shop-secondary text-white font-medium flex justify-center gap-3 p-3 rounded-md w-full hover:opacity-50 ease-in duration-200"
            >
              Copiar endereço <Copy />
            </button>

            <a
              :href="linkEndereco"
              target="_blank"
              class="bg-quanta-shop-secondary flex justify-center gap-3 text-white font-medium p-3 rounded-md w-full hover:opacity-50 ease-in duration-200"
            >
              Ver no mapa
              <MapPin />
            </a>
          </div>

          <div
            class="w-full flex flex-col justify-center items-start gap-5 mt-10"
          >
            <div class="flex gap-1 items-center">
              <p class="text-lg font-medium text-quanta-shop">Contato:</p>
              <p>
                {{ mascaraTelefone(dadosDoCredenciado.celularContato) }}
              </p>
            </div>

            <div class="w-full">
              <button
                @click="
                  copiar(
                    dadosDoCredenciado.celularContato,
                    'Telefone copiado com sucesso!'
                  )
                "
                class="bg-quanta-shop-secondary text-white font-medium flex justify-center gap-3 p-3 rounded-md w-full hover:opacity-50 ease-in duration-200"
              >
                Copiar telefone
                <Copy />
              </button>
            </div>

            <div class="mt-5">
              <h3 class="text-xl font-medium text-quanta-shop">Baixe agora!</h3>
            </div>
            <a
              :href="dadosDoCredenciado.urlAndroid"
              target="_blank"
              class="flex justify-center gap-3 items-center bg-quanta-shop text-white font-medium p-3 rounded-md w-full hover:opacity-50 ease-in duration-200"
            >
              <img
                src="../../assets/img/icon-google-play-48.png"
                class="w-10 h-10"
                alt=""
              />
              <span>Disponível na Google Play</span>
            </a>
            <a
              :href="dadosDoCredenciado.urlApple"
              target="_blank"
              class="flex justify-center gap-3 items-center bg-quanta-shop text-white font-medium p-3 rounded-md w-full hover:opacity-50 ease-in duration-200"
            >
              <img
                src="../../assets/img/icon-app-store.png"
                class="w-8 h-8"
                alt=""
              />
              <span>Disponível na Apps Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { api } from "@/services/api";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Store, Copy, MapPin } from "lucide-vue-next";
import { mascaraTelefone, toTop } from "@/services/helper";

const route = useRoute();
const router = useRouter();

const idCredenciamento = route.params.id;
const loading = ref(Boolean(false));
const dadosDoCredenciado = ref(Object());
const endereco = computed(
  () =>
    `${dadosDoCredenciado.value.rua}, ${dadosDoCredenciado.value.numero} - ${dadosDoCredenciado.value.bairro}, ${dadosDoCredenciado.value.cidade} - ${dadosDoCredenciado.value.estadoUf}, ${dadosDoCredenciado.value.cep}`
);

const linkEndereco = computed(
  () =>
    `https://www.google.com/maps?q=${dadosDoCredenciado.value.rua}+${dadosDoCredenciado.value.numero},${dadosDoCredenciado.value.bairro},${dadosDoCredenciado.value.cidade},${dadosDoCredenciado.value.cep}`
);

onMounted(() => {
  toTop();
  dadoDoCredenciado();
});

const copiar = (item, mensagemToast) => {
  const tempInput = document.createElement("textarea");
  tempInput.value = item;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  return toast(mensagemToast, {
    type: "success",
    autoClose: 3000,
  });
};

const dadoDoCredenciado = async () => {
  try {
    loading.value = true;
    const { data } = await api.get(
      `Credenciamento/obterDadosLojaCredenciada/${idCredenciamento}`
    );
    dadosDoCredenciado.value = data;
    console.log(data);
  } catch (err) {
    if (err?.response && err?.response?.data) {
      const erros = err.response.data?.erros;
      erros.forEach((erro) => {
        return toast(erro.mensagem, {
          type: "error",
          autoClose: false,
        });
      });
    }

    return toast("Algo deu errado, entre em contato com o suporte!", {
      type: "error",
      autoClose: false,
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
