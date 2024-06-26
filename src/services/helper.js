import { api } from "./api.js";
import { mask } from "remask";

export const buscarItemDaCategoria = async (
  idCategoria,
  pagina = 1,
  totalPaginas = 1
) => {
  const dadoCategoria = {
    descricao: "",
    idCategoria: idCategoria,
    page: pagina,
    quantidade: 12,
    tipoAnunciante: [],
    totalPaginas: totalPaginas,
  };

  const { data } = await api.post("Anunciante/obterAnuncios/", dadoCategoria);
  return data;
};

export const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const validarEmail = (email) => {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const removerMascara = (itemComMascara) => {
  const itemSemMascara = itemComMascara.replace(/\D/g, "");
  return itemSemMascara;
};

export const capitalize = (text) => {
  const formatText = text.toLowerCase();
  return formatText.charAt(0).toUpperCase() + formatText.slice(1).toLowerCase();
};

export const mascaraTelefone = (contato) => {
  return mask(contato, "(99) 99999-9999");
};

export const mascaraDinheiroReal = (dinheiro) => {
  return dinheiro.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
