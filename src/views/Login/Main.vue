<template>
  <section class="lg:flex">
    <div class="bg-quanta-shop hidden w-1/2 lg:block h-auto">imagem</div>
    <div
      class="w-full lg:w-1/2 flex flex-col justify-center items-center h-screen"
    >
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
        <h3 class="text-xl font-semibold">SOU CLIENTE QUANTA SHOP</h3>
        <p class="text-gray-400 text-md mt-3">
          Se você quer se credenciar,
          <span class="text-quanta-shop-secondary underline font-semibold"
            >clique aqui!</span
          >
        </p>
        <div class="flex flex-col mt-10">
          <label for="" class="text-gray-600">E-mail ou login</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu e-mail ou login"
            v-model="loginEmail"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Senha</label>
          <div class="w-full relative">
            <input
              class="bg-gray-100 p-3 rounded-lg outline-quanta-shop w-full"
              :type="typePass"
              placeholder="Digite sua senha"
              v-model="senha"
            />
            <div class="absolute top-3 right-2">
              <Eye
                v-if="typePass == 'password'"
                @click="typePass = 'text'"
                class="cursor-pointer"
                color="#286874"
              />
              <EyeOff
                v-else
                @click="typePass = 'password'"
                class="cursor-pointer"
                color="#286874"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col text-end">
          <a href="" class="font-semibold text-quanta-shop-secondary"
            >Esqueceu sua senha ?</a
          >
        </div>

        <div class="flex flex-col mt-8">
          <button
            type="button"
            @click="entrar()"
            class="bg-quanta-shop p-3 rounded-lg text-gray-50 font-semibold"
          >
            Login
          </button>
          <router-link
            to="/cadastrar"
            class="bg-gray-50 text-center p-3 rounded-lg text-quanta-shop font-semibold mt-5 border-quanta-shop border"
          >
            Criar conta Quanta Shop
          </router-link>
        </div>

        <div class="w-full text-center mt-5">
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
import { api } from "@/services/api";
import { Eye, EyeOff } from "lucide-vue-next";
import { ref } from "vue";

const typePass = ref("password");
const loginEmail = ref("");
const senha = ref("");

const entrar = async () => {
  try {
    const { data } = await api.post("UsuarioLogin/autenticacao", {
      login: loginEmail.value,
      senha: senha.value,
    });

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
