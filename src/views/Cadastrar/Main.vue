<template>
  <section class="lg:flex">
    <div class="bg-yellow-400 hidden w-1/2 lg:block h-auto">imagem</div>
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
      <div
        class="w-full text-end absolute top-3 right-3 font-bold text-quanta-shop"
      >
        <router-link to="/" class="text-xl">X</router-link>
      </div>
      <div
        class="flex flex-col justify-center bg-teal-800 px-10 py-5 rounded-3xl mx-10 my-5 max-w-96 text-center"
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
          <label for="" class="text-gray-600">login</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu login"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Nome</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu nome completo"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">E-mail</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Confirme seu e-mail</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu e-mail novamente"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Celular</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu celular. Ex: (00) 00000-0000"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Senha</label>
          <div class="w-full relative">
            <input
              class="bg-gray-100 p-3 rounded-lg outline-quanta-shop w-full"
              :type="typePass"
              placeholder="Digite sua senha"
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

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Confirme sua senha</label>
          <div class="w-full relative">
            <input
              class="bg-gray-100 p-3 rounded-lg outline-quanta-shop w-full"
              :type="typePass"
              placeholder="Digite sua senha novamente"
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

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600">Patrocinador</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop"
            type="text"
            placeholder="Digite seu patrocinador"
          />
        </div>

        <div class="flex gap-2 mt-8">
          <input type="checkbox" class="accent-lime-400 w-4 cursor-pointer" />
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
          <input type="checkbox" class="accent-lime-400 w-4 cursor-pointer" />
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
            class="bg-quanta-shop p-3 rounded-lg text-gray-50 font-semibold"
          >
            Login
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
import { ref } from "vue";

const typePass = ref("password");
</script>

<style lang="scss" scoped></style>
