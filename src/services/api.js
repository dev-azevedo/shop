import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-hlog.quantashop.com.br/api/",
});
