<template>
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
      <Filters
        :isVisible="showMobileFilters"
        @close="showMobileFilters = false"
      />

      <!-- Основная часть с товарами -->
      <div class="w-full md:w-3/4 lg:w-4/5">
        <!-- Заголовок и сортировка -->
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <h1 class="text-3xl font-bold mb-4 md:mb-0">КАТАЛОГ</h1>
          <div class="flex items-center">
            <span class="mr-2">Сортировка:</span>
            <select
              class="bg-gray-900 px-4 py-2 rounded"
              v-model="sortType"
              @change="handleSortChange"
            >
              <option value="popularity">По популярности</option>
              <option value="price_asc">По возрастанию цены</option>
              <option value="price_desc">По убыванию цены</option>
            </select>
          </div>
        </div>

        <!-- Карточки товаров -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <!-- Карточка товара -->
          <ProductCardVue
            v-for="good in goodsStore.paginatedGoods"
            :key="good.id"
            :good="good"
          />
        </div>

        <!-- Пагинация -->
        <div class="flex justify-center mt-12" v-if="goodsStore.totalPages > 1">
          <nav class="flex items-center space-x-2">
            <button
              class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900"
              :disabled="goodsStore.activePage === 1"
              @click="goodsStore.setPage(goodsStore.activePage - 1)"
            >
              &laquo;
            </button>
            <button
              class="px-3 py-1 rounded"
              v-for="page in goodsStore.totalPages"
              :key="page"
              @click="goodsStore.setPage(page)"
              :class="{
                'bg-purple-700': goodsStore.activePage === page,
                'bg-gray-800 hover:bg-gray-700': goodsStore.activePage != page,
              }"
            >
              {{ page }}
            </button>
            <button
              class="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900"
              :disabled="goodsStore.activePage === goodsStore.totalPages"
              @click="goodsStore.setPage(goodsStore.activePage + 1)"
            >
              &raquo;
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/CatalogFilters.vue";
import { useGoodsStore } from "@/stores/goodsStore.js";
import ProductCardVue from "./ProductCard.vue";

export default {
  data() {
    return {
      goodsStore: useGoodsStore(),
      showMobileFilters: false,
      sortType: "popularity",
    };
  },

  components: {
    Filters,
    ProductCardVue,
  },

  methods: {
    toggleMobileFilters() {
      this.showMobileFilters = !this.showMobileFilters;
    },

    handleSortChange() {
      this.goodsStore.setSortType(this.sortType);
    },
  },

  created() {
    this.goodsStore.setSortType("popularity");
  },
};
</script>