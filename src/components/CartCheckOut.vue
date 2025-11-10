<template>
  <div
    class="bg-gray-900/50 rounded-lg p-6 border border-gray-800 h-fit sticky top-4"
  >
    <h2 class="text-xl font-bold mb-4">ОФОРМЛЕНИЕ</h2>

    <div class="space-y-4 mb-6">
      <div class="flex justify-between">
        <span class="text-gray-400"
          >Товары ({{ userStore.totalCartCounter }})</span
        >
        <span>{{ orderCost.toLocaleString("ru-RU") }} ₽</span>
      </div>
      <div class="flex justify-between">
        <span class="text-gray-400">Доставка</span>
        <span v-if="orderCost >= 15000">Бесплатно</span>
        <span v-if="orderCost < 15000"
          >{{ deliveryNoDiscount.toLocaleString("ru-RU") }} ₽</span
        >
      </div>
      <div class="border-t border-gray-700 pt-4 flex justify-between text-lg">
        <span>Итого</span>
        <span class="font-bold"
          >{{ finalOrderCost.toLocaleString("ru-RU") }} ₽</span
        >
      </div>
    </div>

    <button
      class="w-full bg-purple-600 lg:hover:bg-purple-700 max-lg:active:bg-purple-700 py-3 rounded font-bold transition mb-4 disabled:bg-purple-700"
      :disabled="userStore.cart.length < 1"
      @click="payment"
    >
      ПЕРЕЙТИ К ОПЛАТЕ
    </button>

    <p class="text-gray-400 text-sm text-center">
      Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных
      данных
    </p>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore.js";

export default {
  data() {
    return {
      userStore: useUserStore(),
      deliveryNoDiscount: 2000,
    };
  },

  computed: {
    orderCost() {
      return this.userStore.cart.reduce((total, product) => {
        return total + this.userStore.getCurrentPrice(product);
      }, 0);
    },

    finalOrderCost() {
      if (this.orderCost >= 15000) {
        return this.orderCost;
      } else if (this.orderCost == 0) {
        return 0;
      } else {
        return this.orderCost + 2000;
      }
    },
  },

  methods: {
    payment() {
        this.$emit('payment')
    }
  }
};
</script>