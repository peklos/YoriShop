<template>
  <header class="bg-white border-b border-gray-200 fixed w-full z-50">
    <!-- Десктопное меню (показывается от 1024px) -->
    <nav class="hidden lg:flex justify-center py-4">
      <ul class="flex space-x-2">
        <li v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            class="block px-12 py-2 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Мобильное меню (показывается до 1024px) -->
    <div class="lg:hidden flex justify-between items-center px-4 py-3">
      <router-link to="/" class="text-xl font-bold">YORISHOP</router-link>
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="p-2 focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Мобильное меню (выпадающий список) -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-white border-t border-gray-200 px-4 py-2 shadow-lg"
      >
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              class="block px-4 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-200"
              @click="isMobileMenuOpen = false"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const menuItems = [
  { path: "/", title: "Главная" },
  { path: "/catalog", title: "Каталог" },
  { path: "/brands", title: "Бренды" },
  { path: "/about", title: "О нас" },
  { path: "/cart", title: "Корзина" },
];
</script>

<style scoped>

</style>