<template>
  <section class="px-10 xl:px-80">
    <p class="text-gray-400">
      <router-link to="/">Home</router-link> > Como funciona
    </p>
    <div class="w-full mt-10 text-center">
      <img
        src="@/assets/img/icone-quanta-Shop.4cc179bc.png"
        alt="Icone quanta shop"
        class="w-32 xl:w-44 mx-auto"
      />
      <h1 class="mt-10 font-semibold text-4xl text-quanta-shop-secondary">
        COMO FUNCIONA
      </h1>

      <p class="mt-5 font-medium">
        A palavra “cashback” significa em português, literalmente, “dinheiro de
        volta”. E apesar do nome ser em inglês, o funcionamento é simples: o
        consumidor faz uma compra e recebe de volta parte do valor gasto.
      </p>
    </div>

    <div class="mt-10 xl:mt-32">
      <h3 class="text-2xl xl:text-4xl font-bold text-center xl:text-left">
        E COMO POSSO FAZER PARTE <br />
        <span class="text-quanta-shop">DESSE PROJETO?</span>
      </h3>
      <div
        class="mt-20 lg:mt-10 xl:gap-20 flex flex-col 2xl:flex-row items-center"
      >
        <div class="w-full 2xl:w-1/2 order-2">
          <div class="mt-20 flex flex-col gap-20 text-center">
            <div class="flex flex-col items-center gap-3">
              <div class="bg-quanta-shop-secondary p-3 rounded-full">
                <ClipboardPen :size="32" :color="colors.primary" />
              </div>
              <p class="font-medium">
                O processo é muito simples, para isso, basta fazer o seu
                cadastro online gratuito com id do seu patrocinador na Quanta
                Shop e assim, começar a usufruir dos nossos benefícios desde a
                sua primeira compra.
              </p>
            </div>

            <div class="flex flex-col items-center gap-3">
              <div class="bg-quanta-shop-secondary p-3 rounded-full">
                <ClipboardCheck :size="32" :color="colors.primary" />
              </div>
              <p class="font-medium">
                O nosso cadastro é gratuito, caso escolha ser um Agente de
                Fidelização será pago um valor de acordo com o modelo de Agência
                de Fidelização em ambos os casos o interessado deve ser indicado
                por algum membro da comunidade Quanta Shop.
              </p>
            </div>

            <div class="flex flex-col items-center gap-3">
              <div class="bg-quanta-shop-secondary p-3 rounded-full">
                <ShoppingBasket :size="32" :color="colors.primary" />
              </div>
              <p class="font-medium">
                Depois de feito o cadastro, basta fazer compras nas lojas
                credenciadas e assim, passar a receber de volta parte do valor
                gasto.
              </p>
            </div>
          </div>
        </div>
        <div class="w-full 2xl:w-1/2 flex justify-center order-1">
          <img
            src="../../assets/img/Questions-amico.svg"
            alt="Como funciona icone"
          />
        </div>
      </div>
    </div>

    <div class="mt-32">
      <h3 class="text-4xl font-bold text-quanta-shop text-center xl:text-left">
        NÃO PERCA TEMPO. APROVEITE!
      </h3>
      <p class="mt-5 font-medium text-center xl:text-left">
        Construa uma rede de amigos que indica amigos e crie a sua organização
        de consumo inteligente com ganhos exponenciais.
      </p>

      <div class="w-full flex justify-center mt-5">
        <button
          class="bg-quanta-shop-secondary p-3 font-medium text-white rounded-lg"
        >
          Venha fazer parte!
        </button>
      </div>
    </div>

    <div class="w-full mt-20">
      <CarrousselAnunciantes />
    </div>
  </section>
</template>

<script setup>
import { api } from "@/services/api";
import colors from "@/services/colors";
import { ClipboardCheck, ClipboardPen, ShoppingBasket } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import CarrousselAnunciantes from "@/components/CarrousselAnunciantes/Main.vue";
import { toTop } from "@/services/helper.js";

const anunciantesAleatorios = ref([]);

onMounted(() => {
  toTop();
  getAnuciantesAleatorio();
});

const getAnuciantesAleatorio = async () => {
  const { data } = await api.get("Anunciante/obterAnunciantesAleatorio/");

  anunciantesAleatorios.value = data;
};
</script>

<style lang="scss" scoped></style>
