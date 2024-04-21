import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./../views/Layout/Main.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home/Main.vue"),
      },
      {
        name: "categoria",
        path: "categoria/:idCategoria/:nomeCategoria",
        component: () => import("@/views/ListaDeAnunciantes/Main.vue"),
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
