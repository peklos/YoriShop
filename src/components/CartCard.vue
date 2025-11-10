<template>
  <div
    class="bg-gray-900/50 rounded-lg p-4 flex flex-col sm:flex-row gap-4 border border-gray-800"
  >
    <div class="w-full sm:w-32 h-32 flex-shrink-0">
      <img
        :src="getImage(product.img)"
        :alt="product.img"
        class="w-full h-full object-cover rounded"
      />
    </div>
    <div class="flex-1">
      <div class="flex justify-between">
        <h3 class="font-bold text-lg">{{ product.name }}</h3>
        <button
          class="text-gray-400 hover:text-white"
          @click="userStore.toggleMoveToCard(product)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p class="text-gray-400 mb-2">
        Размер: <span class="font-bold">{{ product.size }}</span>
      </p>
      <div class="flex items-center justify-between mt-auto">
        <div class="flex items-center border border-gray-700 rounded">
          <button
            class="px-3 py-1 text-lg lg:hover:bg-gray-700 max-lg:active:bg-gray-700 transition-all duration-100"
            @click="userStore.productSumDecrease(product)"
          >
            -
          </button>
          <span class="px-3">{{ product.sum }}</span>
          <button
            class="px-3 py-1 text-lg lg:hover:bg-gray-700 max-lg:active:bg-gray-700 transition-all duration-100"
            @click="userStore.productSumIncrease(product)"
          >
            +
          </button>
        </div>
        <span class="font-bold text-lg"
          >{{
            userStore.getCurrentPrice(product).toLocaleString("ru-RU")
          }}₽</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useImagesStore } from "@/stores/imagesStore.js";
import { useUserStore } from "@/stores/userStore.js";

export default {
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  props: {
    product: {
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