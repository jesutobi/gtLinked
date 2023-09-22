import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/homepage.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import FormLayout from "../components/formlayout.vue";
import Contact from "../views/contact.vue";
import Register from "../views/register.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact,
      },
    ],
  },
  {
    path: "/",
    component: FormLayout,
    children: [
      {
        path: "/register",
        name: "register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return desired position
  },
});

export default router;
