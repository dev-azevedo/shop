<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div
      class="relative flex flex-row items-center justify-center xl:justify-between h-24 gap-4 bg-quanta-shop xl:px-20 2xl:px-96"
    >
      <button @click="toggleOffcanvas" class="xl:hidden absolute left-4">
        <AlignJustify color="#FFF" :size="32" />
      </button>

      <div class="w-32 xl:w-56 xl:mr-10">
        <img
          src="../../assets/img/logo-quanta-shop-branca.b701cc1c.png"
          alt="Quanta shop"
        />
      </div>
      <div
        class="hidden w-full bg-gray-50 xl:flex items-center rounded-md gap-2 p-1"
      >
        <Search color="#286874" :size="20" class="ml-2" />
        <input
          type="text"
          class="bg-gray-50 outline-none p-2 w-1/2 font-semibold text-gray-600"
        />
      </div>

      <router-link
        v-if="!user.username"
        to="/login"
        class="hidden xl:flex items-center rounded-md gap-2 p-1 text-gray-50 w-72 text-sm"
      >
        <User color="#fff" :size="20" class="" />
        <p class="text-left">
          Olá, faça seu login <br />
          ou cadastre-se
        </p>
      </router-link>
      <div
        v-else
        class="hidden xl:block font-semibold text-quanta-shop-secondary cursor-pointer relative btn-opcoes-user p-1 rounded-full border-2 border-quanta-shop-secondary"
      >
        <div class="text-center">
          <img :src="user.urlImg" alt="" class="rounded-full w-14" />
        </div>

        <ul
          class="bg-white text-start p-2 border border-quanta-shop text-quanta-shop absolute w-48 opacity-0 opcoes-user rounded-md top-14"
        >
          <li
            class="border-b border-gray-100 flex gap-2 mb-3 items-center hover:opacity-50 ease-in duration-200"
          >
            <User :size="20" /> Perfil
          </li>
          <li
            class="border-b border-gray-100 flex gap-2 mb-3 items-center hover:opacity-50 ease-in duration-200"
          >
            <Lock :size="20" /> Alterar senha
          </li>
          <li
            class="border-b border-gray-100 flex gap-2 mb-3 items-center hover:opacity-50 ease-in duration-200"
          >
            <LayoutPanelLeft :size="20" />Painel
          </li>
          <li
            class="border-b border-gray-100 flex gap-2 items-center hover:opacity-50 ease-in duration-200"
            @click="logout()"
          >
            <DoorOpen :size="20" /> Sair
          </li>
        </ul>
      </div>

      <button class="hidden xl:block">
        <ShoppingCart color="#FFF" :size="32" />
      </button>
      <div v-if="false">
        <input type="text" />
      </div>
    </div>

    <nav
      class="hidden xl:block bg-quanta-shop-secondary lg:px-10 2xl:px-96 p-2"
    >
      <ul
        class="flex justify-between font-semibold text-gray-50 text-xl cursor-pointer relative"
      >
        <li class="hover:opacity-50 ease-in duration-200">
          <router-link to="/" class="hover:opacity-50 ease-in duration-200">
            Lojas
          </router-link>
        </li>
        <li class="hover:opacity-50 ease-in duration-200">
          <router-link to="/quemsomos">Quem somos</router-link>
        </li>
        <li class="hover:opacity-50 ease-in duration-200">
          <router-link to="/comofunciona">Como funciona</router-link>
        </li>
        <li>Credenciamento</li>
        <li class="hover:opacity-50 ease-in duration-200">
          <router-link to="/contato">Contato</router-link>
        </li>
        <li class="btn-mais-opcoes-menu">
          <span class="flex items-end gap-2"> Mais opções <ChevronDown /></span>
          <ul
            class="mais-opcoes-menu bg-gray-50 rounded-md text-quanta-shop p-2 absolute w-52 top-8"
          >
            <li
              class="border-b border-gray-200 mb-3 p-1 hover:opacity-50 ease-in duration-200"
            >
              <a
                href="https://quantabank.com.br/"
                target="_blank"
                class="flex gap-2 items-center"
              >
                <CreditCard :size="20" /> Quanta Bank
              </a>
            </li>
            <li
              class="border-b border-gray-200 mb-3 p-1 hover:opacity-50 ease-in duration-200"
            >
              <a
                href="https://bigcash.blob.core.windows.net/documentos/CAMPANHA%20QUANTA%20AMIZADE.pdf"
                target="_blank"
                class="flex gap-2 items-center"
              >
                <Users :size="20" /> Quanta Amizade
              </a>
            </li>
            <li
              class="border-b border-gray-200 mb-3 p-1hover:opacity-50 ease-in duration-200"
            >
              <button @click="installApp()" class="flex gap-2 items-center">
                <MonitorDown :size="20" /> Instalar App
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- Mobile -->
    <div>
      <!-- Offcanvas -->
      <transition name="fade">
        <nav
          v-if="showOffcanvas"
          class="offcanvas fixed inset-y-24 h-full left-0 w-64 bg-gray-100 text-gray-900 z-50"
        >
          <!-- Conteúdo do offcanvas -->
          <div class="p-4">
            <router-link
              v-if="!user.username"
              to="/login"
              class="flex items-center justify-center bg-quanta-shop rounded-md gap-2 p-1 text-white text-sm"
            >
              <User color="#ffffff" :size="20" class="" />
              <p class="text-left">
                Olá, faça seu login <br />
                ou cadastre-se
              </p>
            </router-link>
            <div v-else class="flex gap-2 items-end">
              <div
                class="font-semibold w-14 flex justify-center items-center text-quanta-shop-secondary relative p-1 rounded-full border-2 border-quanta-shop-secondary"
              >
                <div
                  class="text-center flex items-center"
                  @click="showOpcoesUser = !showOpcoesUser"
                >
                  <img :src="user.urlImg" alt="" class="rounded-full w-14" />
                </div>

                <ul
                  class="bg-white text-start p-2 border border-quanta-shop text-quanta-shop absolute w-56 rounded-b-md top-16 left-0 ease-in duration-200"
                  :class="{
                    'opacity-100': showOpcoesUser,
                    'opacity-0': !showOpcoesUser,
                  }"
                >
                  <li
                    class="border-b border-gray-100 flex gap-2 mb-3 items-center"
                  >
                    <User :size="20" /> Perfil
                  </li>
                  <li
                    class="border-b border-gray-100 flex gap-2 mb-3 items-center"
                  >
                    <Lock :size="20" /> Alterar senha
                  </li>
                  <li
                    class="border-b border-gray-100 flex gap-2 mb-3 items-center"
                  >
                    <LayoutPanelLeft :size="20" />Painel
                  </li>
                  <li
                    class="border-b border-gray-100 flex gap-2 items-center"
                    @click="logout()"
                  >
                    <DoorOpen :size="20" /> Sair
                  </li>
                </ul>
              </div>
              <div class="text-lg font-semibold">Olá, {{ user.username }}</div>
            </div>
            <div class="border border-b-gray-300 w-full mt-3"></div>
            <ul class="font-semibold text-xl cursor-pointer mt-3">
              <li class="border-b border-gray-200 mb-3 p-1">
                <router-link
                  to="/"
                  @click="toggleOffcanvas()"
                  class="flex gap-2 items-center"
                >
                  <ShoppingBag :size="20" /> Lojas
                </router-link>
              </li>
              <li class="border-b border-gray-200 mb-3 p-1">
                <router-link
                  to="/quemsomos"
                  @click="toggleOffcanvas()"
                  class="flex gap-2 items-center"
                >
                  <GalleryVerticalEnd :size="20" />Quem somos
                </router-link>
              </li>
              <li class="border-b border-gray-200 mb-3 p-1">
                <router-link
                  to="/comofunciona"
                  class="flex gap-2 items-center"
                  @click="toggleOffcanvas()"
                  ><AppWindow :size="20" /> Como funciona</router-link
                >
              </li>
              <li
                class="border-b border-gray-200 mb-3 p-1 flex gap-2 items-center"
              >
                <FileText :size="20" />
                Credenciamento
              </li>
              <li class="border-b border-gray-200 mb-3 p-1">
                <router-link
                  to="/contato"
                  class="flex gap-2 items-center"
                  @click="toggleOffcanvas()"
                >
                  <Mail :size="20" />
                  Contato
                </router-link>
              </li>
              <li
                class="border-b border-gray-200 mb-3 p-1 flex gap-2 items-center"
              >
                <CreditCard :size="20" />
                Quanta Bank
              </li>
              <li
                class="border-b border-gray-200 mb-3 p-1 flex gap-2 items-center"
              >
                <Users :size="20" />
                Quanta Amizade
              </li>
              <li
                @click="installApp"
                class="border-b border-gray-200 mb-3 p-1 flex gap-2 items-center"
              >
                <MonitorDown :size="20" />
                Instalar App
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import {
  AlignJustify,
  Search,
  ShoppingCart,
  User,
  Lock,
  LayoutPanelLeft,
  DoorOpen,
  ShoppingBag,
  GalleryVerticalEnd,
  AppWindow,
  FileText,
  Mail,
  CreditCard,
  Users,
  MonitorDown,
} from "lucide-vue-next";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { AuthStore } from "@/stores/Auth";
import { ChevronDown } from "lucide-vue-next";

const auth = AuthStore();
const showOffcanvas = ref(false);
const beforeInstallPromptEvent = ref(null);
const showOpcoesUser = ref(false);

const user = computed(() => auth.getUser);

onMounted(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    console.log("Evento beforeinstallprompt capturado:", event);
  });
  window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
});

const toggleOffcanvas = () => {
  showOffcanvas.value = !showOffcanvas.value;
};

const logout = () => {
  auth.logout();
};

const handleBeforeInstallPrompt = (event) => {
  console.log("Evento beforeinstallprompt capturado:", event);
  beforeInstallPromptEvent.value = event;
};

const installApp = () => {
  if (beforeInstallPromptEvent.value) {
    console.log(beforeInstallPromptEvent);
    beforeInstallPromptEvent.value.prompt();
    beforeInstallPromptEvent.value.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Usuário aceitou a instalação");
      } else {
        console.log("Usuário recusou a instalação");
      }
    });
  }
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

.opcoes-user {
  opacity: 0;
  transition: opacity 0.1s ease;
}
.mais-opcoes-menu {
  opacity: 0;
  transition: opacity 0.1s ease;
}

.btn-opcoes-user:hover .opcoes-user {
  opacity: 1;
  transition: all 1s ease !important;
}
.btn-mais-opcoes-menu:hover .mais-opcoes-menu {
  opacity: 1 !important;
  transition: all 1s ease !important;
}
</style>
