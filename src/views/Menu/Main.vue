<template>
  <section>
    <div
      class="flex flex-row items-center justify-between h-24 bg-green-500 px-10 lg:px-20"
    >
      <button>
        <AlignJustify color="#FFF" :size="32" />
      </button>
      <div class="bg-yellow-500 text-30">Logo</div>
      <button>
        <Search color="#FFF" :size="32" />
      </button>
      <div v-if="false">
        <input type="text" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { AlignJustify, Search } from "lucide-vue-next";
</script>

<style scoped></style>
