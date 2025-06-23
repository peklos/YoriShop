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
      class="bg-gradient-to-br from-purple-900/100 via-black to-purple-900/80"
    >
      <!-- Баннер с бегущей строкой -->
      <BannerOnTop :content="'РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% • '" />

      <!-- 1. Hero Section (Главный баннер) -->
      <div
        class="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          :src="getImage('yorisportxerd')"
          alt="Yori Sport x ERD Drop"
          class="absolute w-full h-full object-cover opacity-55"
          loading="lazy"
        />
        <div class="relative z-10 text-center px-4">
          <h1
            class="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-shadow-not-tailwind"
          >
            YORI SPORT × ERD
          </h1>
          <p
            class="text-lg md:text-xl lg:text-2xl mb-8 text-shadow-not-tailwind"
          >
            Новая коллаборация — только 72 часа
          </p>
          <router-link to="/catalog">
            <button
              class="bg-purple-600 text-white px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-bold hover:bg-purple-700 transition shadow-lg"
            >
              КУПИТЬ СЕЙЧАС
            </button>
          </router-link>
        </div>
      </div>

      <!-- 2. Категории -->
      <div class="container mx-auto py-16 px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">ЧТО У НАС ЕСТЬ</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- Категория 1 -->
          <router-link to="/catalog" class="flex flex-col h-full">
            <div
              class="bg-gray-900 p-6 text-center hover:bg-gray-800 transition cursor-pointer flex-1 flex flex-col"
            >
              <div class="mb-4 flex-shrink-0" style="height: 192px">
                <img
                  :src="getImage('vetmo')"
                  alt="Худи"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="font-bold mt-auto">OVERSIZE HOODIES</p>
            </div>
          </router-link>

          <!-- Категория 2 -->
          <router-link to="/catalog" class="flex flex-col h-full">
            <div
              class="bg-gray-900 p-6 text-center hover:bg-gray-800 transition cursor-pointer flex-1 flex flex-col"
            >
              <div class="mb-4 flex-shrink-0" style="height: 192px">
                <img
                  :src="getImage('balenruner')"
                  alt="Кроссовки"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p class="font-bold mt-auto">КРОССОВКИ</p>
            </div>
          </router-link>

          <!-- Категория 3 -->
          <router-link to="/catalog" class="flex flex-col h-full">
            <div
              class="bg-gray-900 p-6 text-center hover:bg-gray-800 transition cursor-pointer flex-1 flex flex-col"
            >
              <div class="mb-4 flex-shrink-0" style="height: 192px">
                <img
                  :src="getImage('jogeri')"
                  alt="Джоггеры"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p class="font-bold mt-auto">КАРГО & ДЖОГГЕРЫ</p>
            </div>
          </router-link>

          <!-- Категория 4 -->
          <router-link to="/catalog" class="flex flex-col h-full">
            <div
              class="bg-gray-900 p-6 text-center hover:bg-gray-800 transition cursor-pointer flex-1 flex flex-col"
            >
              <div class="mb-4 flex-shrink-0" style="height: 192px">
                <img
                  :src="getImage('accessories')"
                  alt="Аксессуары"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p class="font-bold mt-auto">АКСЕССУАРЫ</p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 3. Хиты продаж -->
      <div class="bg-gray-900 py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center">ТОП-ПРОДАЖИ</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <router-link to="/catalog"
              ><div class="bg-black p-4 hover:scale-105 transition">
                <img
                  :src="getImage('givenchy')"
                  alt="GYVENCHI Tee"
                  class="w-full h-64 object-cover mb-4"
                  loading="lazy"
                />
                <p class="text-gray-400">GYVENCHI</p>
                <p class="font-bold mb-2">Футболка "CYBER"</p>
                <p class="text-purple-500 font-bold">12 990 ₽</p>
              </div></router-link
            >

            <router-link to="/catalog"
              ><div class="bg-black p-4 hover:scale-105 transition">
                <img
                  :src="getImage('9060')"
                  alt="New Balance 9060"
                  class="w-full h-64 object-cover mb-4"
                  loading="lazy"
                />
                <p class="text-gray-400">NEW BALANCE</p>
                <p class="font-bold mb-2">9060 Black</p>
                <p class="text-purple-500 font-bold">24 990 ₽</p>
              </div></router-link
            >

            <router-link to="/catalog"
              ><div class="bg-black p-4 hover:scale-105 transition">
                <img
                  :src="getImage('yorihoodie')"
                  alt="Yori Sport Zip Hoodie"
                  class="w-full h-64 object-cover mb-4"
                  loading="lazy"
                />
                <p class="text-gray-400">YORI SPORT</p>
                <p class="font-bold mb-2">Зип-худи "MAINLANE"</p>
                <p class="text-purple-500 font-bold">18 990 ₽</p>
              </div></router-link
            >
          </div>
        </div>
      </div>

      <!-- 4. Коллаборация -->
      <div class="py-16 px-4 bg-gradient-to-r from-purple-900 to-black">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">КОЛЛАБ VETEMENTS × TNF</h2>
          <p class="text-xl mb-8">Эксклюзивный дроп — осталось 12 пар</p>
          <img
            :src="getImage('vetmotnf')"
            alt="Vetements x TNF"
            class="w-full max-w-2xl mx-auto mb-8"
            loading="lazy"
          /><button
            class="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition"
            @click="showModal = true"
          >
            ЗАБРОНИРОВАТЬ
          </button>
        </div>
      </div>

      <!-- 5. Подписка -->
      <EmailSubscribeVue />

      <modalPopupVue
        v-model="showModal"
        :product="{ name: 'VETEMENTS × TNF', img: 'vetmotnf', new_price: 49999, brand: 'VETEMENTS, TNF', category: 'Верх', size: 'EXCLUSIVE ALL'}"
        :goods="[]"
        @success="showSuccessModal = true"
        @cancel="showModal = false"
      />

      <modalPopupSuccessVue v-model="showSuccessModal" />
    </div>
  </div>
</template>

<script>
import BannerOnTop from "@/components/BannerWithRunningLine.vue";
import { useImagesStore } from "@/stores/imagesStore.js";
import EmailSubscribeVue from "@/components/EmailSubscribe.vue";
import modalPopupVue from "@/components/modalPopup.vue";
import modalPopupSuccessVue from "@/components/modalPopupSuccess.vue";

export default {
  name: "HomeView",
  data() {
    return {
      showModal: false,
      showSuccessModal: false,
    };
  },

  components: {
    EmailSubscribeVue,
    BannerOnTop,
    modalPopupVue,
    modalPopupSuccessVue,
  },

  computed: {
    getImage() {
      const store = useImagesStore();
      return store.getImage;
    },
  },

  methods: {
    thankYouForYourAttention() {
      alert("Спасибо за внимание :)");
    },
  },
};
</script>

<style>
.text-shadow-not-tailwind {
  text-shadow: 0 0 20px black;
}
</style>