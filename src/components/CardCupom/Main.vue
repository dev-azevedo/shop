<template>
  <div class="w-full flex-col lg:flex-row flex p-3 border rounded-lg mb-3">
    <div
      class="w-full lg:w-1/6 p-5 lg:p-10 flex flex-col items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-dotted"
    >
      <strong class="text-4xl">25%</strong>
      <span class="text-4xl font-light">CUPOM</span>
    </div>

    <div class="w-full lg:w-5/6 p-10">
      <div class="flex flex-col items-center justify-center">
        <span class="w-full text-2xl font-bold text-center lg:text-left"
          >Até 25% OFF aplicando o cupom de desconto nome_anunciante
        </span>
        <span class="w-full text-sm text-gray-500 text-center lg:text-left"
          >Outras informações
        </span>
      </div>

      <div class="w-full text-center lg:text-left">
        <button class="bg-quanta-shop px-10 py-2 rounded-md text-white mt-3">
          Copiar cupom
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
