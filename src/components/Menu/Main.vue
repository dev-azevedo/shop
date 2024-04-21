<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div
      class="flex flex-row items-center justify-between h-24 gap-4 bg-quanta-shop px-10 lg:px-96"
    >
      <button @click="toggleOffcanvas" class="lg:hidden">
        <AlignJustify color="#FFF" :size="32" />
      </button>
      <div class="w-56 mr-10">
        <img
          src="../../assets/img/logo-quanta-shop-branca.b701cc1c.png"
          alt="Quanta shop"
        />
      </div>
      <div class="w-full bg-gray-50 flex items-center rounded-md gap-2 p-1">
        <Search color="#286874" :size="20" class="ml-2" />
        <input
          type="text"
          class="bg-gray-50 outline-none p-2 w-1/2 font-semibold text-gray-600"
        />
      </div>

      <router-link
        to="/login"
        class="flex items-center rounded-md gap-2 p-1 text-gray-50 w-72 text-sm"
      >
        <User color="#fff" :size="20" class="" />
        <p class="text-left">
          Olá, faça seu login <br />
          ou cadastre-se
        </p>
      </router-link>

      <button>
        <ShoppingCart color="#FFF" :size="32" />
      </button>
      <div v-if="false">
        <input type="text" />
      </div>
    </div>
    <nav
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
    </nav>

    <div>
      <!-- Offcanvas -->
      <transition name="fade">
        <nav
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
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { AlignJustify, Search, ShoppingCart, User } from "lucide-vue-next";
import { ref } from "vue";

const showOffcanvas = ref(false);

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value;
};
</script>

<style scoped>
.offcanvas {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
