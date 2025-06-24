<template>
  <div class="text-white min-h-screen font-sans relative overflow-hidden">
    <!-- Градиентные элементы фона -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px]"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px]"
      ></div>
    </div>

    <!-- Основной контент с градиентом -->
    <div class="bg-gradient-to-br from-purple-900/100 via-black to-purple-900/80">
      <!-- Баннер с бегущей строкой -->
      <BannerOnTop :content="'БЕСПЛАТНАЯ ДОСТАВКА • 14 ДНЕЙ НА ВОЗВРАТ • ПОДДЕРЖКА 24/7 • '" />

      <!-- Hero секция -->
      <div class="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          :src="getImage('about-hero')"
          alt="О нас"
          class="absolute w-full h-full object-cover opacity-30 bg-black"
          loading="lazy"
        />
        <div class="relative z-10 text-center px-4">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-not-tailwind">
            О НАС
          </h1>
          <p class="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto text-shadow-not-tailwind">
            Мы создаём пространство, где мода встречается с индивидуальностью
          </p>
        </div>
      </div>

      <!-- Основной контент -->
      <div class="container mx-auto py-16 px-4">
        <!-- Блок 1: Наша история -->
        <section class="mb-24 md:mb-32">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">НАША ИСТОРИЯ</h2>
              <div class="space-y-4 text-gray-300">
                <p>
                  Основанный в 2018 году, наш магазин начался с маленького шоурума в центре Москвы.
                  Сегодня мы стали одним из ведущих мультибрендовых ритейлеров современной уличной моды и люксовых брендов.
                </p>
                <p>
                  Наша миссия — привносить актуальные мировые тренды в гардеробы наших клиентов,
                  сохраняя при этом индивидуальный подход к каждому.
                </p>
                <p>
                  За 5 лет мы собрали коллекцию из более чем 50 брендов и создали сообщество
                  единомышленников, ценящих качество и уникальность.
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 relative">
              <img
                :src="getImage('about-history')"
                alt="Наша история"
                class="w-full max-h-[800px] rounded-lg shadow-2xl"
                loading="lazy"
              />
              <div class="absolute -bottom-6 -right-6 bg-purple-900/80 p-4 rounded-lg hidden lg:block">
                <p class="text-2xl font-bold">5+</p>
                <p class="text-sm">лет на рынке</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Блок 2: Наши ценности -->
        <section class="mb-24 md:mb-32">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">НАШИ ЦЕННОСТИ</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-gray-900/50 p-6 rounded-lg lg:hover:bg-purple-900/30 transition">
              <div class="text-purple-500 text-4xl mb-4">✧</div>
              <h3 class="text-xl font-bold mb-3">Аутентичность</h3>
              <p class="text-gray-400">
                Мы работаем только с официальными поставщиками и гарантируем подлинность каждого изделия.
              </p>
            </div>
            <div class="bg-gray-900/50 p-6 rounded-lg lg:hover:bg-purple-900/30 transition">
              <div class="text-purple-500 text-4xl mb-4">♡</div>
              <h3 class="text-xl font-bold mb-3">Экспертиза</h3>
              <p class="text-gray-400">
                Наши стилисты помогут подобрать идеальный образ для любого случая.
              </p>
            </div>
            <div class="bg-gray-900/50 p-6 rounded-lg lg:hover:bg-purple-900/30 transition">
              <div class="text-purple-500 text-4xl mb-4">✺</div>
              <h3 class="text-xl font-bold mb-3">Сервис</h3>
              <p class="text-gray-400">
                Бесплатная доставка, примерка перед покупкой и индивидуальный подход.
              </p>
            </div>
            <div class="bg-gray-900/50 p-6 rounded-lg lg:hover:bg-purple-900/30 transition">
              <div class="text-purple-500 text-4xl mb-4">✶</div>
              <h3 class="text-xl font-bold mb-3">Сообщество</h3>
              <p class="text-gray-400">
                Мы создаём пространство для тех, кто ценит уникальность и самовыражение.
              </p>
            </div>
          </div>
        </section>

        <!-- Блок 3: Команда -->
        <section class="mb-24 md:mb-32">
          <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">НАША КОМАНДА</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48 h-48 border-4 border-purple-900/50">
                <img
                  :src="getImage('vlad')"
                  alt="ВЛАД"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl font-bold">ВЛАД</h3>
              <p class="text-purple-400 mb-2">Основатель</p>
              <p class="text-gray-400 text-sm">
                "Мода — это искусство, которое мы носим каждый день"
              </p>
            </div>
            <div class="text-center">
              <div class="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48 h-48 border-4 border-purple-900/50">
                <img
                  :src="getImage('tihon')"
                  alt="ТИХОН"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl font-bold">ТИХОН</h3>
              <p class="text-purple-400 mb-2">Креативный директор</p>
              <p class="text-gray-400 text-sm">
                "Каждый образ — это история, которую стоит рассказать"
              </p>
            </div>
            <div class="text-center">
              <div class="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48 h-48 border-4 border-purple-900/50">
                <img
                  :src="getImage('sanya')"
                  alt="АЛЕКСАНДР"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl font-bold">АЛЕКСАНДР</h3>
              <p class="text-purple-400 mb-2">Главный стилист</p>
              <p class="text-gray-400 text-sm">
                "Правильно подобранная вещь может изменить всё"
              </p>
            </div>
            <div class="text-center">
              <div class="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-48 h-48 border-4 border-purple-900/50">
                <img
                  :src="getImage('egor')"
                  alt="ЕГОР"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 class="text-xl font-bold">ЕГОР</h3>
              <p class="text-purple-400 mb-2">Руководитель сервиса</p>
              <p class="text-gray-400 text-sm">
                "Ваше удовлетворение — наш главный приоритет"
              </p>
            </div>
          </div>
        </section>

        <!-- Блок 4: Магазины -->
        <section class="mb-24 md:mb-32">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            <div class="lg:w-1/2 relative order-2 lg:order-1">
              <img
                :src="getImage('about-store')"
                alt="Наши магазины"
                class="w-full max-h-[800px] rounded-lg shadow-2xl"
                loading="lazy"
              />
              <div class="absolute -bottom-6 -left-6 bg-black/80 p-4 rounded-lg hidden lg:block">
                <p class="text-2xl font-bold">3</p>
                <p class="text-sm">фирменных бутика</p>
              </div>
            </div>
            <div class="lg:w-1/2 order-1 lg:order-2">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">НАШИ МАГАЗИНЫ</h2>
              <div class="space-y-6">
                <div class="bg-gray-900/50 p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    МОСКВА, ПЕТРОВКА 12
                  </h3>
                  <p class="text-gray-400 mb-2">Пн-Вс: 10:00-22:00</p>
                  <p class="text-gray-400">+7 (495) 123-45-67</p>
                </div>
                <div class="bg-gray-900/50 p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    САНКТ-ПЕТЕРБУРГ, НЕВСКИЙ 45
                  </h3>
                  <p class="text-gray-400 mb-2">Пн-Вс: 11:00-21:00</p>
                  <p class="text-gray-400">+7 (812) 123-45-67</p>
                </div>
                <div class="bg-gray-900/50 p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    ОНЛАЙН-МАГАЗИН
                  </h3>
                  <p class="text-gray-400 mb-2">Круглосуточно</p>
                  <p class="text-gray-400">info@yourbrand.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Блок 5: Призыв к действию -->
        <section class="bg-gradient-to-r from-purple-900/50 to-black/50 rounded-2xl p-8 md:p-12 text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-6">ГОТОВЫ НАЧАТЬ?</h2>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Откройте для себя мир современной моды в нашем каталоге или посетите один из наших бутиков
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link to="/catalog" class="flex-1 sm:flex-none">
              <button class="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto px-8 py-3 font-bold transition rounded-lg">
                ПЕРЕЙТИ В КАТАЛОГ
              </button>
            </router-link>
            <button 
              @click="showContactModal = true"
              class="bg-transparent border border-white hover:bg-white hover:text-black w-full sm:w-auto px-8 py-3 font-bold transition rounded-lg"
            >
              СВЯЗАТЬСЯ С НАМИ
            </button>
          </div>
        </section>
      </div>

      <!-- Подписка -->
      <EmailSubscribeVue />

      <!-- Модальное окно контактов -->
      <ModalContact v-model="showContactModal" />
    </div>
  </div>
</template>

<script>
import BannerOnTop from "@/components/BannerWithRunningLine.vue";
import EmailSubscribeVue from "@/components/EmailSubscribe.vue";
import ModalContact from "@/components/ModalContact.vue";
import { useImagesStore } from "@/stores/imagesStore.js";

export default {
  name: "AboutView",
  components: {
    BannerOnTop,
    EmailSubscribeVue,
    ModalContact
  },
  data() {
    return {
      showContactModal: false
    };
  },
  computed: {
    getImage() {
      const store = useImagesStore();
      return store.getImage;
    }
  }
};
</script>

<style>
.text-shadow-not-tailwind {
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
}
</style>