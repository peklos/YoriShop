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
          <CartGoodsVue />
          <!-- Блок оформления -->
          <CartCheckOutVue @payment="showModal = true"/>
        </div>

        <!-- Секция избранного -->
        <FavCartVue />
      </div>
    </div>

    <email-subscribe />
    <modalPopupVue
      v-model="showModal"
      :goods="userStore.cart"
      @success="showSuccessModal = true"
      @cancel="showModal = false"
    />

    <modalPopupSuccessVue v-model="showSuccessModal" />
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore.js";
import BannerOnTop from "@/components/BannerWithRunningLine.vue";
import EmailSubscribe from "@/components/EmailSubscribe.vue";
import modalPopupVue from "@/components/modalPopupCart.vue";
import modalPopupSuccessVue from "@/components/modalPopupSuccess.vue";
import CartGoodsVue from "@/components/CartGoods.vue";
import FavCartVue from "@/components/FavCart.vue";
import CartCheckOutVue from "@/components/CartCheckOut.vue";

export default {
  name: "CartPage",
  data() {
    return {
      showModal: false,
      showSuccessModal: false,
      userStore: useUserStore(),
    };
  },
  components: {
    BannerOnTop,
    EmailSubscribe,
    modalPopupVue,
    modalPopupSuccessVue,
    FavCartVue,
    CartGoodsVue,
    CartCheckOutVue,
  },
};
</script>