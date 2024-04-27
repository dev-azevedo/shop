<template>
  <section class="lg:flex">
    <div
      class="bg-quanta-shop hidden w-1/2 lg:flex justify-center items-center"
    >
      <img
        src="@/assets/img/Discount-cuate.svg"
        alt=""
        class="w-1/3 fixed top-28"
      />
    </div>
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
      <div
        class="w-full text-end absolute top-3 right-3 font-bold text-quanta-shop"
      >
        <router-link to="/" class="text-xl">X</router-link>
      </div>
      <div
        class="flex flex-col justify-center bg-quanta-shop px-10 py-5 rounded-3xl mx-10 my-5 max-w-96 text-center"
      >
        <img
          src="@/assets/img/logo-quanta-shop-branca.b701cc1c.png"
          alt="Login quanta shop"
        />
      </div>
      <form class="px-5 w-full max-w-96">
        <h3 class="text-xl font-semibold">CADASTRAR CONTA QUANTA SHOP</h3>
        <p class="text-gray-600 text-md mt-3">
          Entre para garantir cashback nas suas compras
        </p>
        <p class="text-gray-400 text-md mt-3">
          Se você quer se credenciar,
          <span class="text-quanta-shop-secondary underline font-semibold"
            >clique aqui!</span
          >
        </p>

        <div class="flex flex-col mt-10">
          <label class="text-gray-600 mb-2">Login</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu login"
            v-model="login"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Nome</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu nome completo"
            v-model="nome"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">E-mail</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu e-mail"
            v-model="email"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Confirme seu e-mail</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu e-mail novamente"
            v-model.lazy="confirmeEmail"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Celular</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu celular. Ex: (00) 00000-0000"
            v-mask="'(##) #####-####'"
            v-model.lazy="celular"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Senha</label>
          <div class="w-full relative">
            <input
              class="bg-gray-100 p-3 rounded-lg outline-quanta-shop w-full disabled:opacity-50"
              :type="typePass"
              placeholder="Digite sua senha"
              v-model.lazy="senha"
            />
            <div class="absolute top-3 right-2">
              <Eye
                v-if="typePass == 'password'"
                @click="typePass = 'text'"
                class="cursor-pointer"
                color="colors.primary"
              />
              <EyeOff
                v-else
                @click="typePass = 'password'"
                class="cursor-pointer"
                color="colors.primary"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Confirme sua senha</label>
          <div class="w-full relative">
            <input
              class="bg-gray-100 p-3 rounded-lg outline-quanta-shop w-full disabled:opacity-50"
              :type="typeConfirmPass"
              placeholder="Digite sua senha novamente"
              v-model.lazy="confirmeSenha"
            />
            <div class="absolute top-3 right-2">
              <Eye
                v-if="typeConfirmPass == 'password'"
                @click="typeConfirmPass = 'text'"
                class="cursor-pointer"
                color="colors.primary"
              />
              <EyeOff
                v-else
                @click="typeConfirmPass = 'password'"
                class="cursor-pointer"
                color="colors.primary"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Patrocinador</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu patrocinador"
            v-model="patrocinador"
          />
        </div>

        <div class="flex gap-2 mt-8">
          <input
            type="checkbox"
            :value="false"
            class="accent-lime-400 w-4 cursor-pointer disabled:opacity-50"
            v-model="termosECondicoes"
          />
          <p>
            Li e concordo com os
            <a
              class="text-quanta-shop-secondary font-bold"
              target="_blank"
              href="https://bigcash.blob.core.windows.net/documentos/QB%20-%20TERMOS%20DE%20USO%20E%20BONIFICA%C3%87%C3%83O%20ESPEC%C3%8DFICA%20v102023.pdf"
              >Termos e Condições</a
            >.
          </p>
        </div>
        <div class="flex gap-2 mt-8">
          <input
            type="checkbox"
            :value="false"
            class="accent-lime-400 w-4 cursor-pointer disabled:opacity-50"
            v-model="politicaDePrivacidade"
          />
          <p>
            Li e concordo com as
            <a
              class="text-quanta-shop-secondary font-bold"
              target="_blank"
              href="https://quantashop.com.br/QB-LGPD.pdf"
              >Política de Privacidade</a
            >.
          </p>
        </div>

        <div class="flex flex-col mt-8">
          <button
            type="button"
            class="bg-quanta-shop p-3 rounded-lg text-gray-50 font-semibold disabled:opacity-50"
            :disabled="disabledBtnCadastrar"
            @click="console.log('salvar')"
          >
            Cadastrar
          </button>
        </div>

        <div class="w-full text-center my-5">
          <p class="text-gray-400 text-md mt-3">
            Se você quer se credenciar,
            <span class="text-quanta-shop-secondary underline font-semibold"
              >clique aqui!</span
            >
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { Eye, EyeOff } from "lucide-vue-next";
import { computed, ref, watch } from "vue";
// import colors from "@/services/colors.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const typePass = ref("password");
const typeConfirmPass = ref("password");

const login = ref("");
const nome = ref("");
const email = ref("");
const confirmeEmail = ref("");
const celular = ref("");
const senha = ref("");
const confirmeSenha = ref("");
const patrocinador = ref("");
const termosECondicoes = ref(false);
const politicaDePrivacidade = ref(false);

const disabledBtnCadastrar = computed(
  () =>
    !login.value ||
    !nome.value ||
    !email.value ||
    !confirmeEmail.value ||
    !!emailIncompativel.value ||
    !!emailReal.value ||
    celular.value.length < 15 ||
    !senha.value ||
    senha.value.length < 8 ||
    !confirmeSenha.value ||
    !!senhaIncompativel.value ||
    !patrocinador.value ||
    !termosECondicoes.value ||
    !politicaDePrivacidade.value
);

const emailIncompativel = computed(
  () => email.value && confirmeEmail.value && email.value != confirmeEmail.value
);

const emailReal = computed(() => !email.value.includes("@", "."));

const senhaIncompativel = computed(
  () => senha.value && confirmeSenha.value && senha.value != confirmeSenha.value
);

watch([emailIncompativel, emailReal], () => {
  if (emailIncompativel.value) {
    return toast("Email incompatível. Preencha corretamente.", {
      type: "error",
      autoClose: false,
    });
  }

  if (emailReal.value) {
    toast("Email inválido. Preencha corretamente.", {
      type: "error",
      autoClose: false,
    });
  }
});

watch([senha, senhaIncompativel], () => {
  if (senha.value.length < 8) {
    return toast(
      `Senha muito curta. Informe uma senha de pelo menos 8 caracteres.`,
      {
        type: "error",
        autoClose: false,
      }
    );
  }

  if (senhaIncompativel.value) {
    return toast(`Senha incompativel. Preencha corretamente.`, {
      type: "error",
      autoClose: false,
    });
  }
});

watch(celular, () => {
  if (celular.value.length < 15) {
    return toast(`Celular inválido. Preencha corretamente.`, {
      type: "error",
      autoClose: false,
    });
  }
});
</script>

<style lang="scss" scoped></style>
