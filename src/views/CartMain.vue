<template>
  <div class="text-white min-h-screen font-sans relative overflow-hidden">
    <!-- Градиентные элементы -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px]"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px]"
      ></div>
    </div>

    <!-- Основной контент с градиентом -->
    <div
      class="bg-gradient-to-br from-purple-900/100 via-black to-purple-900/80 pb-20"
    >
      <!-- Баннер с бегущей строкой -->
      <BannerOnTop :content="'БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •'" />

      <div class="container mx-auto py-12 px-4 relative z-10">
        <!-- Заголовок -->
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold">КОРЗИНА</h1>
          <span class="text-gray-400"
            >Всего товаров: {{ userStore.totalCartCounter }}</span
          >
        </div>

        <!-- Основной блок корзины -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Список товаров -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Блок для пустой корзины -->
            <div
              v-if="userStore.cart.length < 1"
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
              <span class="text-2xl font-medium text-gray-500"
                >Корзина пуста</span
              >
              <span class="text-gray-400"
                >Ваши новые кроссовки ждут вас в каталоге</span
              >
            </div>
            <!-- Товары -->
            <div
              class="bg-gray-900/50 rounded-lg p-4 flex flex-col sm:flex-row gap-4 border border-gray-800"
              v-for="product in userStore.cart"
              :key="product.id"
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
                      class="px-3 py-1 text-lg hover:bg-gray-700 transition-all duration-100"
                      @click="
                        product.sum > 1
                          ? (product.sum -= 1)
                          : userStore.toggleMoveToCard(product)
                      "
                    >
                      -
                    </button>
                    <span class="px-3">{{ product.sum }}</span>
                    <button
                      class="px-3 py-1 text-lg hover:bg-gray-700 transition-all duration-100"
                      @click="product.sum += 1"
                    >
                      +
                    </button>
                  </div>
                  <span class="font-bold text-lg"
                    >{{
                      getCurrentPrice(product).toLocaleString("ru-RU")
                    }}₽</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Блок оформления -->
          <div
            class="bg-gray-900/50 rounded-lg p-6 border border-gray-800 h-fit sticky top-4"
          >
            <h2 class="text-xl font-bold mb-4">ОФОРМЛЕНИЕ</h2>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-400"
                  >Товары ({{ userStore.totalCartCounter }})</span
                >
                <span>{{ orderCost.toLocaleString("ru-RU") }} ₽</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Доставка</span>
                <span v-if="orderCost >= 15000">Бесплатно</span>
                <span v-if="orderCost < 15000"
                  >{{ deliveryNoDiscount.toLocaleString("ru-RU") }} ₽</span
                >
              </div>
              <div
                class="border-t border-gray-700 pt-4 flex justify-between text-lg"
              >
                <span>Итого</span>
                <span class="font-bold"
                  >{{ finalOrderCost.toLocaleString("ru-RU") }} ₽</span
                >
              </div>
            </div>

            <button
              class="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-bold transition mb-4"
            >
              ПЕРЕЙТИ К ОПЛАТЕ
            </button>

            <p class="text-gray-400 text-sm text-center">
              Нажимая на кнопку, вы соглашаетесь с условиями обработки
              персональных данных
            </p>
          </div>
        </div>

        <!-- Секция избранного -->
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
              <span class="text-2xl font-medium text-gray-500"
                >Избранных нет</span
              >
              <span class="text-gray-400"
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
                class="w-full mt-3 bg-gray-800 hover:bg-gray-700 py-2 text-sm rounded transition"
                @click="userStore.toggleMoveToCard(product)"
              >
                В КОРЗИНУ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <email-subscribe />
  </div>
</template>

<script>
import BannerOnTop from "@/components/BannerWithRunningLine.vue";
import { useImagesStore } from "@/stores/imagesStore.js";
import { useUserStore } from "@/stores/userStore.js";
import EmailSubscribe from "@/components/EmailSubscribe.vue";

export default {
  name: "CartPage",
  data() {
    return {
      userStore: useUserStore(),
      deliveryNoDiscount: 2000,
    };
  },
  components: {
    BannerOnTop,
    EmailSubscribe,
  },
  computed: {
    getImage() {
      const store = useImagesStore();
      return store.getImage;
    },

    orderCost() {
      return this.userStore.cart.reduce((total, product) => {
        return total + this.getCurrentPrice(product);
      }, 0);
    },

    finalOrderCost() {
      if (this.orderCost >= 15000) {
        return this.orderCost;
      } else if (this.orderCost == 0) {
        return 0
      } else {
        return this.orderCost + 2000;
      }
    },
  },

  methods: {
    getCurrentPrice(product) {
      return product.new_price * product.sum;
    },
  },
};
</script>