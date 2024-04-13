<template>
  <section>
    <div
      class="flex flex-row items-center justify-between h-24 gap-4 bg-quanta-shop px-10 lg:px-96"
    >
      <button @click="toggleOffcanvas" class="lg:hidden">
        <AlignJustify color="#FFF" :size="32" />
      </button>
      <div class="bg-yellow-500 text-30">Logo</div>
      <div class="w-full bg-gray-50 flex items-center rounded-md gap-2 p-1">
        <Search color="#286874" :size="24" />
        <input
          type="text"
          class="bg-gray-50 outline-none p-2 w-1/2 font-semibold text-gray-600"
        />
      </div>

      <button
        class="flex items-center rounded-md gap-2 p-1 text-gray-50 w-72 text-sm"
      >
        <User color="#fff" :size="20" class="" />
        <p class="text-left">
          Olá, faça seu login <br />
          ou cadastre-se
        </p>
        <ChevronDown class="mt-auto" />
      </button>

      <button>
        <ShoppingCart color="#FFF" :size="32" />
      </button>
      <div v-if="false">
        <input type="text" />
      </div>
    </div>
    <div
      class="hidden lg:block bg-quanta-shop-secondary lg:px-10 2xl:px-96 p-2"
    >
      <ul
        class="flex justify-between font-semibold text-gray-50 text-xl cursor-pointer"
      >
        <li>Lojas</li>
        <li>Quem somos</li>
        <li>Como funciona</li>
        <li>Credenciamento</li>
        <li>Contato</li>
        <li>Quanta Bank</li>
        <li>Quanta Amizade</li>
        <li>Instalar App</li>
      </ul>
    </div>

    <div>
      <!-- Offcanvas -->
      <transition name="fade">
        <div
          v-if="showOffcanvas"
          class="offcanvas fixed inset-y-24 h-full left-0 w-64 bg-gray-100 text-white z-50"
        >
          <!-- Conteúdo do offcanvas -->
          <div class="p-4">
            <h1 class="text-lg text-gray-900 font-semibold">Menu</h1>
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <div class="w-full h-full p-2">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup>
import {
  AlignJustify,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-vue-next";

import { ref } from "vue";

const showOffcanvas = ref(false);

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value;
};
</script>

<style scoped>
.bg-quanta-shop {
  background-color: #286874;
}

.bg-quanta-shop-secondary {
  background-color: #98c73a;
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */

.offcanvas {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
