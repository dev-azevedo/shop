<template>
  <section
    class="bg-gray-400 py-20 px-10 2xl:px-96 flex flex-col lg:flex-row justify-between items-center relative"
  >
    <div class="w-56 mb-10 lg:mb-auto">
      <img src="../../assets/img/logo-quanta-shop-branca.b701cc1c.png" alt="" />
    </div>

    <nav class="mb-10 lg:mb-auto">
      <h3 class="text-xl font-bold text-white mb-5">Veja Mais</h3>
      <ul
        class="flex flex-col items-start gap-2 font-semibold text-gray-50 text-xl cursor-pointer"
      >
        <li class="hover:opacity-50 ease-in duration-200">
          <router-link to="/"> Lojas </router-link>
        </li>
        <li class="hover:opacity-50 ease-in duration-200">
          <router-link to="/quemsomos">Quem somos </router-link>
        </li>
        <li class="hover:opacity-50 ease-in duration-200">Como funciona</li>
        <li class="hover:opacity-50 ease-in duration-200">Credenciamento</li>
        <li class="hover:opacity-50 ease-in duration-200">Contato</li>
      </ul>
    </nav>

    <div class="text-white">
      <h3 class="text-2xl font-semibold mb-5">Informações de contato</h3>
      <p class="font-medium">Email: contato@quantabank.com.br</p>
      <p class="font-medium">CNPJ: <b>34.985.528/0001-89</b></p>

      <div class="rounded-full w-auto flex gap-2 mt-3">
        <Facebook
          class="hover:opacity-50 ease-in duration-200 cursor-pointer"
        />
        <Instagram
          class="hover:opacity-50 ease-in duration-200 cursor-pointer"
        />
        <Phone class="hover:opacity-50 ease-in duration-200 cursor-pointer" />
      </div>
    </div>

    <div
      class="w-full bg-quanta-shop absolute bottom-0 left-0 text-center p-3 text-white font-medium"
    >
      Todos os direitos reservados 2024 © Quanta Shop
    </div>
  </section>
</template>

<script setup>
import { Facebook, Instagram, Phone } from "lucide-vue-next";
</script>

<style lang="scss" scoped></style>
