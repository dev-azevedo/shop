import { api } from "./api.js";

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
