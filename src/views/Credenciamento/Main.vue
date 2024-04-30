<template>
  <section class="px-10 2xl:px-80">
    <div class="my-10">
      <h1 class="text-4xl text-quanta-shop font-semibold">Cadastre-se</h1>
      <p class="text-sm text-gray-400">
        Após cadastro ligaremos para sua empresa e a aprovação pode acontecer em
        até 60 dias.
      </p>
    </div>

    <form>
      <div class="flex flex-col mt-5">
        <label class="text-gray-600 mb-2">Login do patrocinador</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o login do patrocinador"
          v-model="loginPatrocionador"
          :disabled="loading"
        />
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div class="flex flex-col mt-5">
          <label class="text-gray-600 mb-2">Nome do responsável</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o nome do responsável"
            v-model="nomeResponsavel"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2"
            >Celular do responsável</label
          >
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o celular do responsável. Ex: (00) 00000-0000"
            v-mask="'(##) #####-####'"
            v-model.lazy="celularResponsavel"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label class="text-gray-600 mb-2">Estabelecimento</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o estabelecimento"
            v-model="estabelecimento"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2"
            >Percentual de Cashback</label
          >
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o percentual de Cashback."
            v-mask="['#%', '##%', '##,#%', '##,##%']"
            v-model="percentualCashback"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Categoria</label>
          <select
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            placeholder="Digite o percentual de Cashback."
            v-model="categoria"
            :disabled="loading"
          >
            <option :value="null" disabled selected>
              Selecione a categoria
            </option>
            <option
              v-for="categoria in listaCategorias"
              :key="categoria.idCategoria"
              :value="categoria.idCategoria"
            >
              {{ categoria.nome }}
            </option>
          </select>
        </div>

        <div class="flex flex-col mt-5">
          <label class="text-gray-600 mb-2">Login</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o login"
            v-model="login"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">CPF ou CNPJ</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o CPF ou CNPJ."
            v-mask="['###.###.###-##', '##.###.###/####-##']"
            v-model="cpfCnpj"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2"
            >Celular do credenciado</label
          >
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o celular do credenciado. Ex: (00) 00000-0000"
            v-mask="'(##) #####-####'"
            v-model.lazy="celularCredenciado"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">E-mail</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu e-mail"
            v-model.lazy="email"
            :disabled="loading"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Confirme seu e-mail</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite seu e-mail novamente"
            v-model.lazy="confirmeEmail"
            :disabled="loading"
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
              :disabled="loading"
            />
            <div class="absolute top-3 right-2">
              <Eye
                v-if="typePass == 'password'"
                @click="typePass = 'text'"
                class="cursor-pointer"
                :color="colors.primary"
              />
              <EyeOff
                v-else
                @click="typePass = 'password'"
                class="cursor-pointer"
                :color="colors.primary"
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
              :disabled="loading"
            />
            <div class="absolute top-3 right-2">
              <Eye
                v-if="typeConfirmPass == 'password'"
                @click="typeConfirmPass = 'text'"
                class="cursor-pointer"
                :color="colors.primary"
              />
              <EyeOff
                v-else
                @click="typeConfirmPass = 'password'"
                class="cursor-pointer"
                :color="colors.primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col mt-5">
        <label for="" class="text-gray-600 mb-2">Importar logo</label>
        <label
          for="inputFile"
          class="border-dashed border-2 text-center bg-gray-100 text-gray-300 font-medium p-3 rounded-lg outline-quanta-shop w-full"
          :class="{
            'opacity-50': loadingCep || loading,
            'cursor-pointer': !loading,
          }"
        >
          <span v-if="!logo?.name">Importe sua logo aqui</span>
          <span v-else class="text-gray-800">
            {{ logo?.name }}
          </span>
        </label>
        <input
          id="inputFile"
          type="file"
          class="hidden"
          :disabled="loadingCep || loading"
          @change.prevent="pegarLogo($event)"
        />

        <div class="w-full my-3 flex justify-center bg-gray-100 rounded-md">
          <img v-if="imageBase64" class="w-56" :src="imageBase64" alt="" />
        </div>
      </div>

      <hr class="w-full border-b border-gray-300 my-5" />

      <h4 class="text-xl font-medium text-quanta-shop">Endereço:</h4>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">CEP</label>
          <div class="relative">
            <input
              class="bg-gray-100 w-full p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
              type="text"
              placeholder="Digite seu CEP"
              v-mask="'#####-###'"
              :disabled="loadingCep || loading"
              v-model="cep"
            />
            <LoadingIcon v-show="loadingCep" class="absolute right-2 top-2" />
          </div>
        </div>
        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Rua</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o nome rua"
            :disabled="loadingCep || loading"
            v-model="rua"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Cidade</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite a cidade"
            :disabled="loadingCep || loading"
            v-model="cidade"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Bairro</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o bairro"
            :disabled="loadingCep || loading"
            v-model="bairro"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Estado</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o estado UF"
            :disabled="loadingCep || loading"
            v-model="estado"
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="" class="text-gray-600 mb-2">Número</label>
          <input
            class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
            type="text"
            placeholder="Digite o número do local"
            v-mask="'###########'"
            :disabled="loadingCep || loading"
            v-model="numero"
          />
        </div>
      </div>

      <div class="flex flex-col mt-5">
        <label for="" class="text-gray-600 mb-2">Complemento</label>
        <input
          class="bg-gray-100 p-3 rounded-lg outline-quanta-shop disabled:opacity-50"
          type="text"
          placeholder="Digite o complemento"
          v-model="complemento"
          :disabled="loading"
        />
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2">
        <div class="flex gap-2 mt-8">
          <input
            type="checkbox"
            :value="false"
            class="accent-lime-400 w-4 disabled:opacity-50"
            :class="{ 'cursor-pointer': !loading }"
            v-model="termosECondicoes"
            :disabled="loading"
          />
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
          <input
            type="checkbox"
            :value="false"
            class="accent-lime-400 w-4 disabled:opacity-50"
            :class="{ 'cursor-pointer': !loading }"
            v-model="politicaDePrivacidade"
            :disabled="loading"
          />
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
      </div>

      <div class="flex flex-col mt-8">
        <button
          type="button"
          class="bg-quanta-shop p-3 rounded-lg text-gray-50 flex justify-center font-semibold disabled:opacity-50"
          :disabled="disabledBtnCadastrar || loadingCep || loading"
          @click="cadastrarCredenciado"
        >
          <span v-if="!loading">Enviar credenciamento para análise</span>
          <LoadingIcon v-else />
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { api } from "@/services/api";
import LoadingIcon from "@/components/LoadingIcon/Main.vue";
import { Eye, EyeOff } from "lucide-vue-next";
import { computed, onMounted, ref, watch } from "vue";
import colors from "@/services/colors.js";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { validarEmail, toTop } from "@/services/helper";

const typePass = ref("password");
const typeConfirmPass = ref("password");

const loadingCep = ref(false);
const loading = ref(false);
const listaCategorias = ref([]);
const arquivosAceitos = ref(["png", "jpg", "jpeg"]);

const loginPatrocionador = ref(null);
const nomeResponsavel = ref(null);
const celularResponsavel = ref(null);
const estabelecimento = ref(null);
const percentualCashback = ref(null);
const categoria = ref(null);
const login = ref(null);
const cpfCnpj = ref(null);
const celularCredenciado = ref(null);
const email = ref(null);
const confirmeEmail = ref(null);
const senha = ref(null);
const confirmeSenha = ref(null);
const logo = ref({});
const imageBase64 = ref({});

const cep = ref(null);
const rua = ref(null);
const cidade = ref(null);
const idCidade = ref(null);
const bairro = ref(null);
const estado = ref(null);
const idEstado = ref(null);
const numero = ref(null);
const complemento = ref(null);
const termosECondicoes = ref(null);
const politicaDePrivacidade = ref(null);

const disabledBtnCadastrar = computed(
  () =>
    !loginPatrocionador.value ||
    !nomeResponsavel.value ||
    !estabelecimento.value ||
    !percentualCashback.value ||
    !categoria.value ||
    !login.value ||
    !cpfCnpj.value ||
    cpfCnpj.value.length < 14 ||
    !email.value ||
    !confirmeEmail.value ||
    !!emailIncompativel.value ||
    !emailReal.value ||
    !celularResponsavel.value ||
    celularResponsavel.value.length < 15 ||
    !celularCredenciado.value ||
    celularCredenciado.value.length < 15 ||
    !senha.value ||
    senha.value.length < 8 ||
    !confirmeSenha.value ||
    !!senhaIncompativel.value ||
    !cep.value ||
    cep.value.value < 9 ||
    !rua.value ||
    !cidade.value ||
    !bairro.value ||
    !estado.value ||
    !termosECondicoes.value ||
    !politicaDePrivacidade.value
);

const emailIncompativel = computed(
  () => email.value && confirmeEmail.value && email.value != confirmeEmail.value
);

const emailReal = computed(() => validarEmail(email.value));

const senhaIncompativel = computed(
  () => senha.value && confirmeSenha.value && senha.value != confirmeSenha.value
);

watch(email, () => {
  if (!emailReal.value) {
    return toast("Email inválido. Preencha corretamente.", {
      type: "error",
      autoClose: false,
    });
  }
});

watch(cep, () => {
  if (cep.value.length == 9) {
    const cepUnmask = cep.value.replace("-", "");

    buscarPorCep(cepUnmask);
  }
});

watch([emailIncompativel], () => {
  if (emailIncompativel.value) {
    return toast("Email incompatível. Preencha corretamente.", {
      type: "error",
      autoClose: false,
    });
  }
});

watch([senha, senhaIncompativel], () => {
  if (senha.value.length < 8) {
    return toast(
      `Senha muito curta. Informe uma senha de pelo menos 8 caracteres.`,
      {
        type: "error",
        autoClose: false,
      }
    );
  }

  if (senhaIncompativel.value) {
    return toast(`Senha incompativel. Preencha corretamente.`, {
      type: "error",
      autoClose: false,
    });
  }
});

watch(celularResponsavel, () => {
  if (celularResponsavel.value.length < 15) {
    return toast(`Celular inválido. Preencha corretamente.`, {
      type: "error",
      autoClose: false,
    });
  }
});

onMounted(() => {
  obterCategoria();
  toTop();
});

const buscarPorCep = async (cepUnmask) => {
  loadingCep.value = true;
  const { data } = await api.get(`https://viacep.com.br/ws/${cepUnmask}/json/`);

  if (data?.erro) {
    loadingCep.value = false;
    return toast("Endereço não localizado. Preencha manualmente.", {
      type: "error",
      autoClose: false,
    });
  }

  bairro.value = data.bairro;
  cidade.value = data.localidade;
  rua.value = data.logradouro;
  estado.value = data.uf;

  await buscarEstados();
  loadingCep.value = false;
};

const buscarEstados = async () => {
  try {
    const { data } = await api.get("/Geral/buscaEstado");

    const estadoApi = data.find((est) => est.uf == estado.value);

    if (estadoApi != null) {
      idEstado.value = estadoApi.idEstado;
      await buscarCidades();
    }
  } catch {
    return toast("Algo deu errado ao buscar estados.", {
      type: "error",
      autoClose: false,
    });
  }
};

const buscarCidades = async () => {
  try {
    const { data } = await api.get("/Geral/buscaCidade/" + idEstado.value);

    const cidadeAPi = data.find((estado) => estado.nome == cidade.value);

    if (cidadeAPi != null) {
      idCidade.value = cidadeAPi.idCidade;
    }
  } catch {
    return toast("Algo deu errado ao buscar cidades.", {
      type: "error",
      autoClose: false,
    });
  }
};

const obterCategoria = async () => {
  try {
    const { data } = await api.get("/Geral/ObterCategorias");

    listaCategorias.value = data;
  } catch {
    return toast(
      "Algo deu errado ao buscar lista de categorias. Preencha manualmente.",
      {
        type: "error",
        autoClose: false,
      }
    );
  }
};

const pegarLogo = (e) => {
  const files = e.target.files;

  [...files].map((file) => {
    const ext = file?.name.split(".").pop();
    if (arquivosAceitos.value.includes(ext)) {
      logo.value = file;

      const reader = new FileReader();
      reader.onload = (event) => {
        imageBase64.value = event.target.result;
      };

      reader.readAsDataURL(file);
    }
  });
};

const cadastrarCredenciado = async () => {
  loading.value = true;
  let cashBackTratado = percentualCashback.value
    .replace("%", "")
    .replace(",", ".");
  const cashback = parseFloat(cashBackTratado);

  const form = {
    estabelecimento: estabelecimento.value,
    idCategoria: categoria.value,
    cep: cep.value,
    rua: rua.value,
    telefone: celularResponsavel.value,
    celularContato: celularCredenciado.value,
    bairro: bairro.value,
    complemento: complemento.value,
    numero: numero.value,
    idEstado: idEstado.value,
    idCidade: idCidade.value,
    faturamentoMensal: 0,
    contactado: false,
    loginPatrocinador: loginPatrocionador.value,
    cnpj: cpfCnpj.value,
    email: email.value,
    confirmEmail: confirmeEmail.value,
    loginResponsavel: login.value,
    nomeResponsavel: nomeResponsavel.value,
    senhaResponsavel: senha.value,
    confirmSenhaResponsavel: confirmeSenha.value,
    percentualCashback: cashback,
    latitude: "",
    longitude: "",
  };

  try {
    await api.post("/Credenciamento", form);

    toast("Enviado para análise!", {
      type: "success",
      autoClose: 3000,
    });

    resetForm();
  } catch (err) {
    if (err?.response && err?.response?.data) {
      const erros = err.response.data?.erros;
      erros.forEach((erro) => {
        return toast(erro.mensagem, {
          type: "error",
          autoClose: false,
        });
      });
    }
  } finally {
    loading.value = false;
  }
};

const resetForm = () => {
  typePass.value = "password";
  typeConfirmPass.value = "password";
  loadingCep.value = false;
  loading.value = false;

  loginPatrocionador.value = null;
  nomeResponsavel.value = null;
  celularResponsavel.value = null;
  estabelecimento.value = null;
  percentualCashback.value = null;
  categoria.value = null;
  login.value = null;
  cpfCnpj.value = null;
  celularCredenciado.value = null;
  email.value = null;
  confirmeEmail.value = null;
  senha.value = null;
  confirmeSenha.value = null;
  logo.value = {};
  imageBase64.value = {};
  cep.value = null;
  rua.value = null;
  cidade.value = null;
  idCidade.value = null;
  bairro.value = null;
  estado.value = null;
  idEstado.value = null;
  numero.value = null;
  complemento.value = null;
  termosECondicoes.value = null;
  politicaDePrivacidade.value = null;
};
</script>

<style lang="scss" scoped></style>
