<template>
  <div>
    <h2 class="font-medium text-2xl mt-20">Perguntas frequentes</h2>
    <p class="text-gray-500">
      Ainda tem dúvidas? Veja se podemos te ajudar com essas respostas.
    </p>

    <div class="grid grid-cols-1 gap-3 mt-10">
      <div v-for="pergunta in perguntasFrequentes" :key="pergunta.idFaq">
        <div
          class="flex flex-col justify-center font-medium bg-gray-50 p-2 rounded-md transition-[height] ease-in duration-200"
          @click="pergunta.show = !pergunta.show"
        >
          <div class="text-center text-quanta-shop cursor-pointer p-2 relative">
            <span>
              {{ pergunta.pergunta }}
            </span>
            <span class="absolute right-0 bottom-0">
              <ChevronDown v-if="!pergunta.show" />
              <ChevronUp v-else />
            </span>
          </div>
          <div
            class="text-center text-quanta-shop border-t mt-3 overflow-auto transition-[height] ease-in duration-200"
            :class="{ 'h-0': !pergunta.show, 'h-auto': pergunta.show }"
          >
            {{ pergunta.resposta }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { api } from "@/services/api";
import { onMounted } from "vue";
import { ref } from "vue";
import { ChevronDown, ChevronUp } from "lucide-vue-next";

const perguntasFrequentes = ref([]);

onMounted(() => {
  buscarFaq();
});

const buscarFaq = async () => {
  try {
    const { data } = await api.get("faq/buscarFaq");
    perguntasFrequentes.value = data;

    perguntasFrequentes.value.map((pergunta) => (pergunta.show = false));
    // ativo: true;
    // dataCadastro: "2020-04-08T18:32:55.957";
    // idFaq: 1;
    // pergunta: "Afinal, quanto tempo leva para minha compra ser identificada?";
    // resposta: "O prazo pode se estender por alguns dias, mas geralmente as lojas levam até 48 horas para nos avisar das compras.";
    // ultimaAtualizacao: "2024-01-29T16:27:04.8926497";
  } catch {
    console.log("err");
  }
};
</script>

<style lang="scss" scoped></style>
