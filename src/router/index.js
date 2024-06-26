import { createWebHistory, createRouter } from "vue-router";
import beforeEach from "./beforeEach";

const routes = [
  {
    path: "/",
    component: () => import("./../views/Layout/Main.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Home/Main.vue"),
      },
      {
        path: "categoria/:idCategoria/:nomeCategoria",
        name: "categoria",
        component: () => import("@/views/ListaDeAnunciantes/Main.vue"),
      },
      {
        path: "quemsomos",
        name: "quemSomos",
        component: () => import("@/views/QuemSomos/Main.vue"),
      },
      {
        path: "comofunciona",
        name: "comoFunciona",
        component: () => import("@/views/ComoFunciona/Main.vue"),
      },
      {
        path: "credenciamento",
        name: "credenciamento",
        component: () => import("@/views/Credenciamento/Main.vue"),
      },
      {
        path: "contato",
        name: "contato",
        component: () => import("@/views/Contato/Main.vue"),
      },
      {
        path: "detalhesCredenciado/:id",
        name: "detalhesCredenciado",
        component: () => import("@/views/DetalhesCredenciado/Main.vue"),
      },
      {
        path: "detalhesAnunciante/:id",
        name: "detalhesAnunciante",
        component: () => import("@/views/DetalhesAnunciante/Main.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("./../views/Login/Main.vue"),
  },

  {
    path: "/Cadastrar",
    component: () => import("./../views/Cadastrar/Main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(beforeEach);

export default router;
