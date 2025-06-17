<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <!-- Баннер с бегущей строкой -->
    <div class="bg-purple-900 overflow-hidden whitespace-nowrap py-3 relative">
      <div class="inline-block whitespace-nowrap animate-marquee">
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
      </div>
      <div
        class="inline-block whitespace-nowrap animate-marquee2 absolute top-3"
      >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
        <span class="text-xl font-bold mx-8"
          >БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •</span
        >
      </div>
    </div>

    <!-- Основное содержимое каталога -->
    <div class="container mx-auto py-8 px-4">
      <!-- Кнопка для мобильных - вынесена перед основным контейнером -->
      <button
        class="md:hidden bg-purple-600 w-full py-3 mb-4 flex items-center justify-center"
        @click="toggleMobileFilters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        {{ showMobileFilters ? "Скрыть фильтры" : "Показать фильтры" }}
      </button>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Фильтры (на мобильных скрыт, открывается по кнопке) -->
        <transition name="slide-fade">
          <div
            v-if="showMobileFilters || !isMobile"
            class="fixed md:static inset-0 md:inset-auto z-50 md:z-auto bg-black md:bg-transparent overflow-y-auto md:overflow-visible"
          >
            <div
              class="md:hidden fixed top-0 left-0 right-0 bg-black p-4 flex justify-between items-center border-b border-gray-800"
            >
              <h3 class="text-xl font-bold">ФИЛЬТРЫ</h3>
              <button @click="showMobileFilters = false" class="text-2xl">
                &times;
              </button>
            </div>

            <div
              class="bg-gray-900 p-6 rounded-lg md:sticky md:top-4 mt-16 md:mt-0"
            >
              <!-- Категории -->
              <div class="mb-6">
                <h4 class="font-bold mb-3 text-purple-400">КАТЕГОРИИ</h4>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Худи & Свитшоты</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Футболки</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Кроссовки</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Джоггеры & Карго</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Аксессуары</span>
                  </label>
                </div>
              </div>

              <!-- Бренды -->
              <div class="mb-6">
                <h4 class="font-bold mb-3 text-purple-400">БРЕНДЫ</h4>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Balenciaga</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Vetements</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Yori Sport</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>Givenchy</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>New Balance</span>
                  </label>
                </div>
              </div>

              <!-- Цена (без стрелочек) -->
              <div class="mb-6">
                <h4 class="font-bold mb-3 text-purple-400">ЦЕНА</h4>
                <div class="flex items-center space-x-4 mb-2">
                  <input
                    type="number"
                    placeholder="От"
                    class="bg-gray-800 px-3 py-2 w-full rounded"
                    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                    pattern="\d*"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="До"
                    class="bg-gray-800 px-3 py-2 w-full rounded"
                    oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                    pattern="\d*"
                  />
                </div>
              </div>

              <!-- Размеры -->
              <div class="mb-6">
                <h4 class="font-bold mb-3 text-purple-400">РАЗМЕРЫ</h4>
                <div class="flex flex-wrap gap-2">
                  <button
                    class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  >
                    XS
                  </button>
                  <button
                    class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  >
                    S
                  </button>
                  <button
                    class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  >
                    M
                  </button>
                  <button
                    class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  >
                    L
                  </button>
                  <button
                    class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  >
                    XL
                  </button>
                  <button
                    class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
                  >
                    XXL
                  </button>
                </div>
              </div>

              <!-- Сезон (без года) -->
              <div class="mb-6">
                <h4 class="font-bold mb-3 text-purple-400">СЕЗОН</h4>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>ЗИМА</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>ВЕСНА</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>ЛЕТО</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" class="mr-2 h-4 w-4" />
                    <span>ОСЕНЬ</span>
                  </label>
                </div>
              </div>

              <button
                class="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded font-bold transition"
              >
                ПРИМЕНИТЬ ФИЛЬТРЫ
              </button>
              <button
                class="w-full mt-2 bg-gray-700 hover:bg-gray-600 py-2 rounded transition"
              >
                СБРОСИТЬ
              </button>
            </div>
          </div>
        </transition>

        <!-- Основная часть с товарами -->
        <div class="w-full md:w-3/4 lg:w-4/5">
          <!-- Заголовок и сортировка -->
          <div
            class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <h1 class="text-3xl font-bold mb-4 md:mb-0">КАТАЛОГ</h1>
            <div class="flex items-center">
              <span class="mr-2">Сортировка:</span>
              <select class="bg-gray-900 px-4 py-2 rounded">
                <option>По популярности</option>
                <option>По возрастанию цены</option>
                <option>По убыванию цены</option>
              </select>
            </div>
          </div>

          <!-- Карточки товаров -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <!-- Карточка товара -->
            <div
              class="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
              v-for="good in goodsStore.goods"
              :key="good.id"
            >
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
                <p class="text-gray-400 text-sm">{{ good.brand.toUpperCase() }}</p>
                <h3 class="font-bold mb-1">{{ good.name }}</h3>
                <div class="flex items-center mb-2">
                  <span class="text-purple-500 font-bold mr-2">{{ good.new_price.toLocaleString('ru-RU') }} ₽</span>
                  <span v-if="good.old_price != null" 
                  class="text-gray-400 line-through text-sm"
                    >{{ good.old_price.toLocaleString('ru-RU') }} ₽</span
                  >
                </div>
                <div class="flex justify-between text-xs text-gray-400 mb-3">
                  <span>{{ good.season.toUpperCase() }}</span>
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
                    class="bg-gray-800 hover:bg-gray-700 p-2 rounded transition flex items-center justify-center"
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
                    class="bg-gray-800 hover:bg-gray-700 p-2 rounded transition flex items-center justify-center"
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

            <!-- Остальные карточки товаров -->
            <!-- ... -->
          </div>

          <!-- Пагинация -->
          <div class="flex justify-center mt-12">
            <nav class="flex items-center space-x-2">
              <button class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                &laquo;
              </button>
              <button class="px-3 py-1 rounded bg-purple-600">1</button>
              <button class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                2
              </button>
              <button class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                3
              </button>
              <button class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                4
              </button>
              <button class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                5
              </button>
              <button class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                &raquo;
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Подписка -->
    <div class="py-16 px-4 bg-gray-800">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">ПОЛУЧИ -15% НА ПЕРВЫЙ ЗАКАЗ</h2>
        <div class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Твой email"
              class="flex-grow px-4 py-3 bg-gray-700 text-white border-none focus:outline-none rounded sm:rounded-r-none"
            />
            <button
              class="bg-purple-600 text-white px-6 py-3 font-bold hover:bg-purple-700 transition whitespace-nowrap rounded sm:rounded-l-none"
            >
              ОТПРАВИТЬ
            </button>
          </div>
        </div>
        <p class="mt-5 text-gray-300">Оставь почту и скидка придёт на email</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useGoodsStore } from "@/stores/goodsStore.js";
import { useImagesStore } from "@/stores/imagesStore.js";

export default {
  name: "CatalogMain",
  data() {
    return {
      goodsStore: useGoodsStore(),
      showMobileFilters: false,
      isMobile: false,
    };
  },

  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },

  computed: {
    getImage() {
      const store = useImagesStore();

      return store.getImage;
    },
  },

  methods: {
    toggleMobileFilters() {
      this.showMobileFilters = !this.showMobileFilters;
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768; // 768px - breakpoint md в Tailwind
    },
  },
};
</script>

<style>
/* Анимация бегущей строки */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 50s linear infinite;
}

.animate-marquee2 {
  display: inline-block;
  animation: marquee 50s linear infinite;
  animation-delay: 0s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Для больших экранов - всегда показывать фильтры */
@media (min-width: 768px) {
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: none;
    opacity: 1;
  }
}

/* Скрытие стрелок у input[type="number"] */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>