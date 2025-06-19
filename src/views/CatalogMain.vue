<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <!-- Баннер с бегущей строкой -->
    <BannerOnTop :content="'БЕСПЛАТНАЯ ДОСТАВКА ОТ 15 000 ₽ •'"/>

    <!-- Основное содержимое каталога -->
    <CatalogContent />

    <!-- Подписка -->
    <EmailSubscribeVue />
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