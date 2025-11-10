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
    <div class="bg-gradient-to-br from-purple-900/100 via-black to-purple-900/100">
      <!-- Баннер с бегущей строкой -->
      <BannerOnTop :content="'БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •'" />

      <!-- Основное содержимое страницы брендов -->
      <div class="container mx-auto py-12 px-4">
        <!-- Заголовок -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">БРЕНДЫ</h1>
          <p class="text-gray-400 max-w-2xl mx-auto">
            Откройте для себя культовые бренды, представленные в нашем магазине.
            Каждый из них — это уникальная история и неповторимый стиль.
          </p>
        </div>

        <!-- Топ 5 брендов -->
        <section class="mb-20">
          <h2 class="text-2xl font-bold mb-8 text-center">
            ТОП-5 БРЕНДОВ ЭТОГО СЕЗОНА
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <!-- Balenciaga -->
            <router-link to="/catalog" @click="goToBrand('Balenciaga')">
              <BrandCard
                brand="Balenciaga"
                description="Авангардный люкс с уличным оттенком"
                :isTop="true"
                :img="'balenciagalogo'"
            /></router-link>

            <!-- Prada -->
            <router-link to="/catalog" @click="goToBrand('Prada')"
              ><BrandCard
                brand="Prada"
                description="Итальянский интеллектуальный шик"
                :isTop="true"
                :img="'pradalogo'"
            /></router-link>

            <!-- Rick Owens -->
            <router-link to="/catalog" @click="goToBrand('Rick Owens')">
              <BrandCard
                brand="Rick Owens"
                description="Готический минимализм и архитектурные формы"
                :isTop="true"
                :img="'ricklogo'"
            /></router-link>

            <!-- Gucci -->
            <router-link to="/catalog" @click="goToBrand('Gucci')">
              <BrandCard
                brand="Gucci"
                description="Эклектичная роскошь нового поколения"
                :isTop="true"
                :img="'guccilogo'"
            /></router-link>

            <!-- Maison Margiela -->
            <router-link to="/catalog" @click="goToBrand('Maison Margiela')">
              <BrandCard
                brand="Maison Margiela"
                description="Деконструкция и концептуальный подход"
                :isTop="true"
                :img="'mmlogo'"
            /></router-link>
          </div>
        </section>

        <!-- Все бренды -->
        <section>
          <h2 class="text-2xl font-bold mb-8 text-center">ВСЕ БРЕНДЫ</h2>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            <router-link
              v-for="brand in filterStore.availableBrands"
              :key="brand"
              to="/catalog"
              class="group cursor-pointer"
              @click="goToBrand(brand)"
            >
              <div
                class="bg-gray-900 rounded-lg p-6 h-full flex items-center justify-center transition-all duration-300 lg:group-hover:bg-purple-900/30"
              >
                <h3
                  class="text-xl font-medium text-center lg:group-hover:text-purple-400"
                >
                  {{ brand }}
                </h3>
              </div>
            </router-link>
          </div>
        </section>
        
        <div class="mt-20 text-center">
          <h2 class="text-2xl font-bold mb-4">НЕ НАШЛИ СВОЙ БРЕНД?</h2>
          <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
            Мы постоянно обновляем нашу коллекцию. Подпишитесь, чтобы первыми
            узнавать о новых поступлениях.
          </p>
          <button
            class="bg-purple-600 lg:hover:bg-purple-700 max-lg:active:bg-purple-700 px-8 py-3 rounded-full font-bold transition"
            @click="THXFORATTENTION()"
          >
            УЗНАТЬ О НОВЫХ ПОСТУПЛЕНИЯХ
          </button>
        </div>
      </div>

      <!-- Подписка -->
      <EmailSubscribeVue />
    </div>
  </div>
</template>

<script>
import BannerOnTop from "@/components/BannerWithRunningLine.vue";
import EmailSubscribeVue from "@/components/EmailSubscribe.vue";
import BrandCard from "@/components/BrandCard.vue";
import { useFilterStore } from "@/stores/filterStore";

export default {
  name: "BrandsPage",
  components: {
    BannerOnTop,
    EmailSubscribeVue,
    BrandCard,
  },
  data() {
    return {
      filterStore: useFilterStore(),
    };
  },
  methods: {
    goToBrand(brand) {
      this.filterStore.selectedBrands = [brand.toLowerCase()];
    },

    THXFORATTENTION() {
      alert("Спасибо за внимание :)");
    },
  },
};
</script>