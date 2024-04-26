<template>
  <section class="px-10 xl:px-80">
    <p class="text-gray-400">
      <router-link to="/">Home</router-link> > Quem somos
    </p>
    <div class="flex flex-col 2xl:flex-row justify-center items-center gap-5">
      <div class="w-full 2xl:w-1/2 xl:mt-10">
        <h1 class="font-semibold text-4xl text-quanta-shop-secondary">
          CONHEÇA A QUANTA SHOP
        </h1>

        <p class="mt-5 font-medium">
          Fundada em 2019 por Mauro Triumph, a Quanta Shop surgiu com a ideia de
          ajudar as pessoas a economizar e gerar renda através do consumo
          inteligente e fidelização. Só em 2018, algumas empresas distribuíram
          mais de 500 milhões de reais em cashback e cupons de desconto, que
          geraram uma receita de mais de 1 bilhão de reais para empresas que
          aderiram ao marketing de fidelização. Agora nosso objetivo é ampliar a
          capacidade de ganhos de nossos usuários e Agentes de Fidelização.
        </p>
      </div>
      <div class="w-full xl:w-1/2 xl:ml-10">
        <img src="@/assets/img/Ecommerce campaign-rafiki.svg" alt="" />
      </div>
    </div>

    <div
      class="mt-10 bg-animation rounded-lg flex flex-col md:flex-row gap-10 justify-around text-white p-4"
    >
      <div>
        <div class="flex justify-center">
          <TicketCheck :size="46" />
        </div>
        <p class="text-center">
          +1200 Milhões
          <br />
          Cupons utilizados
        </p>
      </div>

      <div>
        <div class="flex justify-center">
          <TicketPercent :size="46" />
        </div>
        <p class="text-center">
          +1234 Milhões
          <br />
          Descontos ofertados
        </p>
      </div>

      <div>
        <div class="flex justify-center">
          <Store :size="46" />
        </div>
        <p class="text-center">
          +3000 Mil
          <br />
          Lojas participantes
        </p>
      </div>
    </div>

    <div class="my-20 font-medium">
      <div class="w-full xl:w-1/2 flex items-center gap-2">
        <div class="px-1 bg-quanta-shop py-14"></div>
        <div>
          <span
            class="text-2xl font-bold text-quanta-shop-secondary w-1/12 text-center"
            >2017</span
          >
          <p>
            Alcançamos a marca de mais de um milhão de cupons utilizados. Com a
            expansão do mercado de cupons de desconto no país, alcançamos
            crescimento de mais de 100% ao ano.
          </p>
        </div>
      </div>

      <div class="mt-10 w-full xl:w-1/2 flex items-center gap-2 ml-auto">
        <div class="text-end">
          <span
            class="text-2xl font-bold text-quanta-shop-secondary w-1/12 text-center"
            >2018</span
          >
          <p>
            Com a expansão do mercado de cupons de desconto no país, alcançamos
            crescimento de mais de 100% ao ano.
          </p>
        </div>
        <div class="px-1 bg-quanta-shop py-14"></div>
      </div>

      <div class="mt-10 w-full xl:w-1/2 flex items-center gap-2">
        <div class="px-1 bg-quanta-shop py-14"></div>
        <div>
          <span
            class="text-2xl font-bold text-quanta-shop-secondary w-1/12 text-center"
            >2019</span
          >
          <p>
            Alcançamos a marca de mais de um milhão de cupons utilizados. Com a
            expansão do mercado de cupons de desconto no país.
          </p>
        </div>
      </div>

      <div class="mt-10 w-full xl:w-1/2 flex items-center gap-2 ml-auto">
        <div class="text-end">
          <span
            class="text-2xl font-bold text-quanta-shop-secondary w-1/12 text-center"
            >2020</span
          >
          <p>
            Alcançamos a marca de mais de um milhão de cupons utilizados. Com a
            expansão do mercado.
          </p>
        </div>

        <div class="px-1 bg-quanta-shop py-14"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TicketCheck, TicketPercent, Store } from "lucide-vue-next";
import { toTop } from "@/services/helper.js";
import { onMounted } from "vue";

onMounted(() => {
  toTop();
});
</script>

<style scoped>
.bg-animation {
  background: linear-gradient(73deg, #98c73a, #286874);
  background-size: 400% 400%;

  -webkit-animation: AnimationGradient 4s ease infinite;
  -moz-animation: AnimationGradient 4s ease infinite;
  -o-animation: AnimationGradient 4s ease infinite;
  animation: AnimationGradient 4s ease infinite;
}

@-webkit-keyframes AnimationGradient {
  0% {
    background-position: 0% 41%;
  }
  50% {
    background-position: 100% 60%;
  }
  100% {
    background-position: 0% 41%;
  }
}
@-moz-keyframes AnimationGradient {
  0% {
    background-position: 0% 41%;
  }
  50% {
    background-position: 100% 60%;
  }
  100% {
    background-position: 0% 41%;
  }
}
@-o-keyframes AnimationGradient {
  0% {
    background-position: 0% 41%;
  }
  50% {
    background-position: 100% 60%;
  }
  100% {
    background-position: 0% 41%;
  }
}
@keyframes AnimationGradient {
  0% {
    background-position: 0% 41%;
  }
  50% {
    background-position: 100% 60%;
  }
  100% {
    background-position: 0% 41%;
  }
}
</style>
