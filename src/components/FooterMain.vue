<template>
  <footer class="bg-white border-t border-gray-200 py-8">
    <div class="container mx-auto px-4">
      <!-- Основные ссылки -->
      <nav class="mb-8">
        <ul class="flex flex-wrap justify-center gap-4 md:gap-8">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              :to="item.path"
              class="text-white hover-white-non-tailwind px-3 py-2 block cursor-pointer"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Социальные иконки -->
      <div class="flex justify-center space-x-6 mb-8">
        <a v-for="icon in icons" :key="icon.name" class="w-10" :href="icon.url" target="_blank">
          <img :src="getImage(icon.name)" class="invert shadow-md shadow-[0_0_10px_white] rounded-lg hover:shadow-[0_0_10px_black] duration-200 transition-shadow"/>
        </a>
      </div>

      <!-- Копирайт -->
      <div class="text-center text-gray-500 text-sm">
        &copy; {{ new Date().getFullYear() }} MyStore. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useImagesStore } from "@/stores/imagesStore.js";
const { getImage } = storeToRefs(useImagesStore());

const menuItems = [
  { path: "/", title: "Главная" },
  { path: "/catalog", title: "Каталог" },
  { path: "/brands", title: "Бренды" },
  { path: "/cart", title: "Корзина" },
  { path: "/about", title: "О нас" }
];

const icons = [
  { name: "vk", url: "https://vk.com/peklos" },
  { name: "tg", url: "https://t.me/asdasd666asd" },
  { name: "gh", url: "https://github.com/peklos" },
];
</script>

<style scoped>
.hover-white-non-tailwind:hover {
  text-shadow: 0 0 20px white;
  transition: all 0.2s;
}
</style>