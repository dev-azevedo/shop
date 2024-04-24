import { createWebHistory, createRouter } from "vue-router";

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
        name: "quemsomos",
        component: () => import("@/views/QuemSomos/Main.vue"),
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

export default router;
