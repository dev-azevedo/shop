<template>
  <section class="px-10 lg:px-44 2xl:px-96">
    <p class="text-gray-400">
      <router-link to="/">Home</router-link> > Como funciona
    </p>

    <div class="mt-10 2xl:mt-20 text-center">
      <h1 class="text-4xl font-bold text-quanta-shop">
        FALE COM A QUANTA SHOP
      </h1>
      <p class="text-gray-400">Envie sua mensagem</p>
    </div>

    <div class="flex flex-col items-center 2xl:flex-row gap-5 mt-10 xl:mt-0">
      <form class="w-full 2xl:w-1/2">
        <div class="flex flex-col">
          <label class="font-medium">Name</label>
          <input
            class="border border-gray-200 p-2 rounded-md outline-quanta-shop"
            type="text"
            placeholder="Nome"
            v-model="nome"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label class="font-medium">E-mail</label>
          <input
            class="border border-gray-200 p-2 rounded-md outline-quanta-shop"
            required
            type="email"
            placeholder="E-mail"
            v-model="email"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label class="font-medium">Escreva sua mensagem</label>
          <textarea
            rows="5"
            class="border border-gray-200 p-2 rounded-md outline-quanta-shop"
            placeholder="Mensagem"
            v-model="mensagemEmail"
          ></textarea>
        </div>

        <button
          type="button"
          :disabled="disabledBtnEnviar || loading"
          class="p-2 bg-quanta-shop-secondary mt-5 flex justify-center text-white w-44 font-medium rounded-md disabled:opacity-45 ease-in duration-200"
          :class="{ 'hover:opacity-50': !disabledBtnEnviar || loading }"
          @click="enviarEmail()"
        >
          <LoadingIcon v-if="loading" />
          <span v-else class="my-1">Enviar</span>
        </button>
      </form>

      <div class="w-full 2xl:w-1/2">
        <img
          src="../../assets/img/Emails-amico.svg"
          class="w-4/5 mx-auto"
          alt="Email Icone"
        />
      </div>
    </div>
    <div
      class="p-2 text-center text-white rounded-md ease-in duration-200"
      :class="{
        'bg-quanta-shop-secondary': notificacao.sucesso,
        'bg-red-600': !notificacao.sucesso,
        'opacity-0': !notificacao.show,
        'opacity-100': notificacao.show,
      }"
    >
      {{ notificacao.mensagem }}
    </div>
  </section>
</template>

<script setup>
import { api } from "@/services/api";
import { computed, onMounted, reactive, ref } from "vue";
import LoadingIcon from "@/components/LoadingIcon/Main.vue";
import { toTop } from "@/services/helper";

const nome = ref("");
const email = ref("");
const mensagemEmail = ref("");
const loading = ref(false);
const notificacao = reactive({
  show: false,
  mensagem: null,
  sucesso: false,
});

const disabledBtnEnviar = computed(
  () => !nome.value || !email.value || !mensagemEmail.value
);

onMounted(() => {
  toTop();
});

const validacaoDeEmail = () => {
  if (!nome.value || nome.value.length <= 2)
    return {
      mensagem: "Nome inválido. Preencha o nome corretamente.",
      validacao: false,
    };
  if (
    !email.value ||
    email.value.length <= 2 ||
    !email.value.includes("@", ".")
  )
    return {
      mensagem: "Email inválido. Preencha o nome corretamente.",
      validacao: false,
    };
  if (!mensagemEmail.value || mensagemEmail.value.length <= 5)
    return { mensagem: "Mensagem muito curta!", validacao: false };

  return { validacao: true };
};

const configNotificacao = (mensagem, sucesso) => {
  notificacao.show = true;
  notificacao.mensagem = mensagem;
  notificacao.sucesso = sucesso;

  setTimeout(() => {
    notificacao.show = false;
  }, 3000);
};

const enviarEmail = async () => {
  const valido = validacaoDeEmail();
  if (!valido.validacao) {
    configNotificacao(valido.mensagem, valido.validacao);
    return;
  }

  loading.value = true;
  try {
    await api.post("/contato/EnviarContato", {
      email: email.value,
      mensagem: mensagemEmail.value,
      nome: nome.value,
      tipoContato: 1,
    });

    configNotificacao("Email enviado com sucesso!", true);
  } catch (err) {
    console.log(err);
    configNotificacao("Algo deu errado. Tente novamente", false);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
