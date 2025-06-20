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
      class="bg-gradient-to-br from-purple-900/100 via-black to-purple-900/100"
    >
      <!-- Баннер с бегущей строкой -->
      <BannerOnTop :content="'БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •'" />

      <!-- Основное содержимое каталога -->
      <CatalogContent />

      <!-- Подписка -->
      <EmailSubscribeVue />
    </div>
  </div>
</template>

<script>
import EmailSubscribeVue from "@/components/EmailSubscribe.vue";
import CatalogContent from "@/components/CatalogContent.vue";
import BannerOnTop from "@/components/BannerWithRunningLine.vue";

export default {
  name: "CatalogMain",
  data() {
    return {};
  },

  components: {
    EmailSubscribeVue,
    CatalogContent,
    BannerOnTop,
  },
};
</script>