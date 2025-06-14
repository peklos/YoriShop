<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <div class="bg-purple-900 overflow-hidden whitespace-nowrap py-3 relative">
      <div class="inline-block whitespace-nowrap animate-marquee">
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
      </div>
      <!-- Дублирующий элемент для бесшовности -->
      <div
        class="inline-block whitespace-nowrap animate-marquee2 absolute top-3"
      >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
        <span class="text-xl font-bold mx-8"
          >РАСПРОДАЖА BALENCIAGA • СКИДКИ 50% •</span
        >
      </div>
    </div>
    <!-- 1. Hero Section (Главный баннер) -->
    <div
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        :src="getImage('yorisportxerd')"
        alt="Yori Sport x ERD Drop"
        class="absolute w-full h-full object-cover opacity-55"
        loading="lazy"
      />
      <div class="relative z-10 text-center px-4">
        <h1
          class="text-6xl md:text-8xl font-bold mb-4 text-shadow-not-tailwind"
        >
          YORI SPORT × ERD
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-shadow-not-tailwind">
          Новая коллаборация — только 72 часа
        </p>
        <router-link to="/catalog"
          ><button
            class="bg-purple-600 text-white px-8 py-3 text-lg font-bold hover:bg-purple-700 transition shadow-lg"
          >
            КУПИТЬ СЕЙЧАС
          </button></router-link
        >
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
                :src="getImage('cepi')"
                alt="Аксессуары"
                class="w-full h-full object-cover"
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
        />
        <router-link to="/catalog"
          ><button
            class="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition"
          >
            ЗАБРОНИРОВАТЬ
          </button></router-link
        >
      </div>
    </div>

    <!-- 5. Подписка -->
    <div class="py-16 px-4 bg-gray-800">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">ПОЛУЧИ -15% НА ПЕРВЫЙ ЗАКАЗ</h2>

        <!-- Таймер по центру -->
        <div class="flex justify-center items-center mb-8">
          <div
            class="inline-flex items-center bg-black/30 px-4 py-2 rounded-lg"
          >
            <span class="font-bold text-xl mr-3"
              >🔥 До конца акции осталось:</span
            >
            <span class="font-mono text-2xl">
              {{ hours }}:{{ minutes }}:{{ seconds }}
            </span>
          </div>
        </div>

        <div class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Твой email"
              class="flex-grow px-4 py-3 bg-gray-700 text-white border-none focus:outline-none rounded sm:rounded-r-none"
            />
            <button
              class="bg-purple-600 text-white px-6 py-3 font-bold hover:bg-purple-700 transition whitespace-nowrap rounded sm:rounded-l-none"
              @click="thankYouForYourAttention()"
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
import { useImagesStore } from "@/stores/imagesStore.js";

export default {
  name: "HomeView",
  data() {
    return {
      totalSeconds: 4 * 3600 + 26 * 60 + 34, // 4 часа 26 минут 34 секунды
      timer: null,
    };
  },

  computed: {
    hours() {
      return Math.floor(this.totalSeconds / 3600)
        .toString()
        .padStart(2, "0");
    },

    minutes() {
      return Math.floor((this.totalSeconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
    },

    seconds() {
      return (this.totalSeconds % 60).toString().padStart(2, "0");
    },

    getImage() {
      const store = useImagesStore();
      return store.getImage;
    },
  },

  mounted() {
    this.startTimer();
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.totalSeconds > 0) {
          this.totalSeconds--;
        } else {
          clearInterval(this.timer);
          this.timerEnded();
        }
      }, 1000);
    },

    timerEnded() {
      this.thankYouForYourAttention();
    },

    thankYouForYourAttention() {
      alert("Спасибо за внимание :)");
    },
  },
};
</script>

<style>
.bg-neon-green {
  background-color: #39ff14;
}

.text-neon-green {
  color: #39ff14;
}

.text-shadow-not-tailwind {
  text-shadow: 0 0 20px black;
}

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
  animation-delay: 0.5s; /* Половина длительности анимации */
}
</style>