<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 overflow-y-auto">
    <div
      class="fixed inset-0 bg-black/70 transition-opacity duration-300"
      @click="close"
    ></div>

    <div class="flex min-h-screen items-center justify-center p-4 text-center">
      <div
        class="relative transform overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/100 to-black text-left shadow-xl transition-all w-full max-w-md"
        :class="{
          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !isMounted,
          'opacity-100 translate-y-0 sm:scale-100': isMounted,
        }"
      >
        <div class="px-6 py-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-green-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 class="text-2xl font-bold mb-2">ЗАКАЗ ОФОРМЛЕН!</h3>
          <p class="text-gray-300 mb-4">
            В течение 15 минут с вами свяжется наш менеджер.
          </p>
          <p class="text-purple-400 font-medium mb-6">
            Номер заказа: #{{ Math.floor(1000 + Math.random() * 9000) }}
          </p>
          <button
            class="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-bold transition"
            @click="close"
          >
            ЗАКРЫТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalPopupSuccess",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: this.modelValue,
      isMounted: false,
    };
  },
  methods: {
    close() {
      this.isVisible = false;
      this.$emit("update:modelValue", false);
    },
    mountComponent() {
      setTimeout(() => {
        this.isMounted = true;
      }, 50);
    },
  },
  watch: {
    modelValue(newVal) {
      this.isVisible = newVal;
      if (newVal) {
        this.mountComponent();
        document.body.style.overflow = 'hidden';
      } else {
        this.isMounted = false;
        document.body.style.overflow = '';
      }
    },
  },

  mounted() {
    if (this.modelValue) {
      this.mountComponent();
      document.body.style.overflow = 'hidden'
    }
  },
  unmounted() {
    document.body.style.overflow = ''
  }
};
</script>