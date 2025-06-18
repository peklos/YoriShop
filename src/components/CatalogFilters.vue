<template>
  <transition name="slide-fade">
    <div
      v-if="isVisible || !isMobile"
      class="fixed md:static inset-0 md:inset-auto z-50 md:z-auto bg-black md:bg-transparent overflow-y-auto md:overflow-visible"
    >
      <div
        class="md:hidden fixed top-0 left-0 right-0 bg-black p-4 flex justify-between items-center border-b border-gray-800"
      >
        <h3 class="text-xl font-bold">ФИЛЬТРЫ</h3>
        <button @click="$emit('close')" class="text-2xl">&times;</button>
      </div>

      <div class="bg-gray-900 p-6 rounded-lg md:top-4 mt-16 md:mt-0">
        <!-- Категории -->
        <div class="mb-6">
          <h4 class="font-bold mb-3 text-purple-400">КАТЕГОРИИ</h4>
          <div class="space-y-2">
            <label
              class="flex items-center cursor-pointer"
              v-for="category in categories"
              :key="category"
            >
              <input type="checkbox" class="mr-2 h-4 w-4" />
              <span>{{ category }}</span>
            </label>
          </div>
        </div>

        <!-- Бренды -->
        <div class="mb-6">
          <Disclosure v-slot="{ open }">
            <DisclosureButton class="flex w-full items-center justify-between">
              <h4 class="font-bold text-purple-400">БРЕНДЫ</h4>
              <svg
                :class="open ? 'rotate-90' : ''"
                class="h-5 w-5 text-purple-400 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="pt-3">
              <div class="space-y-2">
                <label
                  v-for="brand in brands"
                  :key="brand"
                  class="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    class="mr-2 h-4 w-4 rounded border-gray-300 text-purple-600"
                  />
                  <span>{{ brand }}</span>
                </label>
              </div>
            </DisclosurePanel>
          </Disclosure>
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
              v-for="size of sizes"
              :key="size"
              class="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Сезон (без года) -->
        <div class="mb-6">
          <Disclosure v-slot="{ open }">
            <DisclosureButton
              class="flex w-full items-center justify-between py-2 focus:outline-none"
            >
              <h4 class="font-bold text-purple-400">СЕЗОН</h4>
              <svg
                :class="open ? 'rotate-180' : ''"
                class="h-5 w-5 text-purple-400 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="pt-2">
              <div class="space-y-2">
                <label
                  v-for="season in seasons"
                  :key="season"
                  class="flex items-center"
                >
                  <input
                    type="checkbox"
                    class="mr-2 h-4 w-4 rounded border-gray-300 text-purple-600 focus:outline-none focus:ring-0"
                  />
                  <span class="text-white hover:text-purple-500">{{
                    season
                  }}</span>
                </label>
              </div>
            </DisclosurePanel>
          </Disclosure>
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
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { useFilterStore } from "@/stores/filterStore";

export default {
  data() {
    return { showMobileFilters: false, isMobile: false };
  },

  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["close"],
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },

  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },

  computed: {
    brands() {
      return useFilterStore().availableBrands;
    },

    categories() {
      return useFilterStore().availableCategories;
    },

    sizes() {
      return useFilterStore().availableSizes;
    },

    seasons() {
      return useFilterStore().availableSeasons;
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

<style scoped>
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