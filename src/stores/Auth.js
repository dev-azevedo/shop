import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { encryptItem, decryptItem } from "@/services/crypto";
import { api } from "@/services/api";

export const AuthStore = defineStore("auth", () => {
  const user = reactive({
    admin: false,
    comerciante: false,
    cultura: null,
    descricao: null,
    email: null,
    empreendedor: false,
    id: null,
    login: null,
    logoUrl: null,
    perfil: null,
    refreshToken: null,
    sadosCompletos: false,
    termosDeAceite: false,
    token: null,
    urlImg: null,
    username: null,
  });

  const setUser = (userLogin) => {
    user.admin = userLogin.admin;
    user.comerciante = userLogin.comerciante;
    user.cultura = userLogin.cultura;
    user.descricao = userLogin.descricao;
    user.email = userLogin.email;
    user.empreendedor = userLogin.empreendedor;
    user.id = userLogin.id;
    user.login = userLogin.login;
    user.logoUrl = userLogin.logoUrl;
    user.perfil = userLogin.perfil;
    user.refreshToken = userLogin.refreshToken;
    user.sadosCompletos = userLogin.sadosCompletos;
    user.termosDeAceite = userLogin.termosDeAceite;
    user.token = userLogin.token;
    user.urlImg = userLogin.urlImg;
    user.username = userLogin.username;

    const encrypt = encryptItem(userLogin);
    localStorage.setItem("@quantashop", encrypt);
  };

  const logout = () => {
    user.admin = false;
    user.comerciante = false;
    user.cultura = null;
    user.descricao = null;
    user.email = null;
    user.empreendedor = false;
    user.id = null;
    user.login = null;
    user.logoUrl = null;
    user.perfil = null;
    user.refreshToken = null;
    user.sadosCompletos = false;
    user.termosDeAceite = false;
    user.token = null;
    user.urlImg = null;
    user.username = null;

    localStorage.removeItem("@quantashop");
  };

  const buscarUserLocalStorage = () => {
    const userLocalStorage = localStorage.getItem("@quantashop");
    if (userLocalStorage) {
      const user = decryptItem(userLocalStorage);
      if (user) setUser(user);

      api.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.token}`;
          return config;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  const getUser = computed(() => user);

  return { getUser, setUser, buscarUserLocalStorage, logout };
});
