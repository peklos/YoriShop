<template>
  <!-- Карточка товара -->
  <div class="bg-gray-900 rounded-lg overflow-hidden cursor-pointer">
    <div class="relative">
      <img
        :src="getImage(good.img)"
        :alt="good.img"
        class="w-full h-64 object-cover"
      />
      <div
        v-if="good.discount != null"
        class="absolute top-2 right-2 bg-red-500 px-2 py-1 rounded text-xs font-bold"
      >
        -{{ good.discount }}
      </div>
    </div>
    <div class="p-4">
      <p class="text-gray-400 text-sm">
        {{ good.brand.toUpperCase() }}
      </p>
      <h3 class="font-bold mb-1">{{ good.name }}</h3>
      <div class="flex items-center">
        <span class="text-purple-500 font-bold mr-2"
          >{{ good.new_price.toLocaleString("ru-RU") }} ₽</span
        >
        <span
          v-if="good.old_price != null"
          class="text-gray-400 line-through text-sm"
          >{{ good.old_price.toLocaleString("ru-RU") }} ₽</span
        >
      </div>

      <span class="text-white text-s">Покупок: {{ good.purchases }} </span>

      <div
        class="flex justify-between text-xs text-gray-300 mb-3 mt-2 bg-gray-800 p-2 rounded-lg"
      >
        <span>{{ good.season.toUpperCase() }}</span>
        <span class="font-bold">{{ good.size.toUpperCase() }}</span>
        <span>{{ good.category.toUpperCase() }}</span>
      </div>
      <!-- Кнопки действий -->
      <div class="grid grid-cols-4 gap-2">
        <button
          class="col-span-2 bg-purple-600 hover:bg-purple-700 py-2 px-2 rounded font-bold transition text-sm"
        >
          КУПИТЬ
        </button>

        <button
          class="p-2 rounded transition flex items-center justify-center button"
          :class="{
            'bg-blue-800 hover:bg-blue-700': userStore.isCartInclude(good),
            'bg-gray-800 hover:bg-gray-700': !userStore.isCartInclude(good),
          }"
          @click="userStore.toggleMoveToCard(good)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>

        <button
          class="p-2 rounded transition flex items-center justify-center button"
          :class="{
            'bg-red-800 hover:bg-red-700': userStore.isFavInclude(good),
            'bg-gray-800 hover:bg-gray-700': !userStore.isFavInclude(good),
          }"
          @click="userStore.toggleMoveToFavorite(good)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore.js";
import { useImagesStore } from "@/stores/imagesStore.js";

export default {
  data() {
    return {
      userStore: useUserStore(),
    };
  },

  props: {
    good: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  computed: {
    getImage() {
      const store = useImagesStore();
      return store.getImage;
    },
  },
};
</script>

<style scoped>
.button {
  transition: 0.1s all;
}

.button:active {
  scale: 0.95;
  transition: 0.1s all;
}
</style>