<template>
  <div class="lg:col-span-2 space-y-6">
    <!-- Блок для пустой корзины -->
    <div
      v-if="userStore.cart.length < 1"
      class="col-span-full py-12 flex flex-col items-center justify-center space-y-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span class="text-2xl font-medium text-gray-500">Корзина пуста</span>
      <span class="text-gray-400 text-center"
        >Ваши новые кроссовки ждут вас в каталоге</span
      >
    </div>
    <!-- Товары -->
    <CartCardVue
      v-for="product in userStore.cart"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import CartCardVue from "@/components/CartCard.vue";
import {useUserStore} from '@/stores/userStore.js'

export default {
    components: {
        CartCardVue
    },
    data() {
        return {
            userStore: useUserStore(),
        }
    }
}
</script>