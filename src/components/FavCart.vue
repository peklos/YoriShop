<template>
  <div class="mt-16">
    <h2 class="text-2xl font-bold mb-6">ИЗБРАННОЕ</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-if="userStore.favorite.length < 1"
        class="col-span-full py-12 flex flex-col items-center justify-center space-y-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="text-2xl font-medium text-gray-500">Избранных нет</span>
        <span class="text-gray-400 text-center"
          >Рекомендуем ознакомиться с новинками в каталоге</span
        >
      </div>
      <!-- Товары -->
      <div
        class="bg-gray-900/50 rounded-lg p-4 border border-gray-800 group"
        v-for="product in userStore.favorite"
        :key="product.id"
      >
        <div class="relative mb-3">
          <img
            :src="getImage(product.img)"
            :alt="product.img"
            class="w-full h-48 object-cover rounded"
          />
          <button
            class="absolute top-2 right-2"
            @click="userStore.toggleMoveToFavorite(product)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-500 hover:text-red-600 transition-all duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h3 class="font-bold">{{ product.name }}</h3>
        <p class="text-gray-400 mb-2">
          {{ product.category.toUpperCase() }}
        </p>
        <p class="font-bold">
          {{ product.new_price.toLocaleString("ru-RU") }} ₽
        </p>
        <button
          class="w-full mt-3 bg-gray-800 lg:hover:bg-gray-700 max-lg:active:bg-gray-700 py-2 text-sm rounded transition"
          @click="userStore.toggleMoveToCard(product)"
        >
          <span v-if="!userStore.isCartInclude(product)">В КОРЗИНУ</span>
          <span v-if="userStore.isCartInclude(product)">УБРАТЬ ИЗ КОРЗИНЫ</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {useImagesStore} from '@/stores/imagesStore.js'
import {useUserStore} from '@/stores/userStore.js'

export default {
    data() {
        return {
            imagesStore: useImagesStore(),
            userStore: useUserStore(),
        }
    },

    computed: {
        getImage() {
            return this.imagesStore.getImage
        }
    }
}
</script>