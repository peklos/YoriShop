import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/HomeMain.vue";
import Catalog from "@/views/CatalogMain.vue";
import Brands from "@/views/BrandsMain.vue";
import AboutUs from "@/views/AboutUsMain.vue";
import Cart from "@/views/CartMain.vue";

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: Home },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/brands",
    name: "Brands",
    component: Brands,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;
