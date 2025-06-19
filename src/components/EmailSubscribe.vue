<template>
  <div class="py-16 px-4 bg-gray-800">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">ПОЛУЧИ -15% НА ПЕРВЫЙ ЗАКАЗ</h2>

      <TimerSaleVue />

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
</template>

<script>
import TimerSaleVue from "@/components/TimerSale.vue";

export default {
  data() {
    return {};
  },

  components: {
    TimerSaleVue,
  },

  methods: {
    thankYouForYourAttention() {
      alert("Спасибо за внимание :)");
    },
  },
};
</script>