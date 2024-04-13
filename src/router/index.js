import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./../views/Menu/Main.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home/Main.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
