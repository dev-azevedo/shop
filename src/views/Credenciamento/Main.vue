<template>
  <section class="px-10 2xl:px-80">
    <h1 class="text-4xl text-quanta-shop font-semibold">Cadastre-se</h1>
    <p class="text-sm text-gray-400">
      Após cadastro ligaremos para sua empresa e a aprovação pode acontecer em
      até 60 dias.
    </p>

    <form>
      <div class="flex flex-col mt-10">
        <label class="text-gray-600 mb-2">Login do patrocinador</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o login do patrocinador"
          v-model="loginPatrocionador"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label class="text-gray-600 mb-2">Nome do responsável</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o nome do responsável"
          v-model="nomeResponsavel"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="" class="text-gray-600 mb-2">Celular do responsável</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o celular do responsável. Ex: (00) 00000-0000"
          v-mask="'(##) #####-####'"
          v-model.lazy="celularResponsavel"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label class="text-gray-600 mb-2">Estabelecimento</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o estabelecimento"
          v-model="estabelecimento"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="" class="text-gray-600 mb-2">Percentual de Cashback</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o percentual de Cashback."
          v-mask="['#%', '##%', '##,#%', '##,##%']"
          v-model.lazy="percentualCashback"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="" class="text-gray-600 mb-2">Categoria</label>
        <select
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          placeholder="Digite o percentual de Cashback."
        >
          <option value="" disabled selected>Selecione a categoria</option>
        </select>
      </div>

      <div class="flex flex-col mt-5">
        <label class="text-gray-600 mb-2">Login</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o login"
          v-model="login"
        />
      </div>

      <div class="flex flex-col mt-5">
        <label for="" class="text-gray-600 mb-2">CPF ou CNPJ</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o CPF ou CNPJ."
          v-mask="['###.###.###-##', '##.###.###/####-##']"
          v-model.lazy="cpfCnpj"
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
    </form>
  </section>
</template>

<script setup>
import { Eye, EyeOff } from "lucide-vue-next";
// import colors from "@/services/colors.js";
</script>

<style lang="scss" scoped></style>
