import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: () => import('@/views/HomeMain.vue') },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import('@/views/CatalogMain.vue'),
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import('@/views/BrandsMain.vue'),
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import('@/views/AboutUsMain.vue'),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () => import('@/views/CartMain.vue'),
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
