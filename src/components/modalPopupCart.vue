<template>
  <!-- Компонент попапа -->
  <div v-if="isVisible" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Затемнение фона -->
    <div
      class="fixed inset-0 bg-black/70 transition-opacity duration-300"
      @click="close"
    ></div>

    <!-- Контент попапа -->
    <div
      class="flex min-h-screen items-center justify-center p-4 text-center sm:p-0"
    >
      <div
        class="relative transform overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/100 to-black text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-2xl"
        :class="{
          'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !isMounted,
          'opacity-100 translate-y-0 sm:scale-100': isMounted,
        }"
      >
        <!-- Градиентные элементы -->
        <div class="absolute inset-0 -z-10">
          <div
            class="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"
          ></div>
        </div>

        <!-- Заголовок и кнопка закрытия -->
        <div
          class="flex items-center justify-between border-b border-gray-800 px-6 py-4"
        >
          <h3 class="text-xl font-bold text-white">Оформление заказа</h3>
          <button
            @click="close"
            class="rounded-md p-1 text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Основное содержимое -->
        <div class="px-6 py-4">
          <!-- Информация о товаре -->
          <div
            class="flex gap-4 mb-6 p-4 bg-gray-900/50 rounded-lg"
            v-for="product in userStore.cart"
            :key="product.id"
          >
            <div class="w-24 h-24 flex-shrink-0">
              <img
                :src="getImage(product.img)"
                :alt="product.name"
                class="w-full h-full object-cover rounded"
              />
            </div>
            <div class="text-left">
              <h4 class="font-bold">{{ product.name }}</h4>
              <p class="text-gray-400 text-sm">
                {{ product.brand.toUpperCase() }}
              </p>
              <p class="text-gray-400 text-sm">
                Категория: {{ product.category }}
              </p>
              <p class="text-gray-400 text-sm" v-if="product.size">
                Размер: {{ product.size }}
              </p>
              <p class="text-gray-400 text-sm" v-if="product.size">
                Количество: {{ product.sum }}
              </p>
              <div class="mt-1">
                <span class="font-bold"
                  >{{ product.new_price.toLocaleString("ru-RU") }} ₽</span
                >
              </div>
            </div>
          </div>

          <!-- Форма оформления -->
          <div class="space-y-4">
            <div v-if="errorMessage.length > 0" class="text-center">
              <span class="bg-white text-red-500 rounded-lg font-bold py-1 md:px-4">{{
                errorMessage
              }}</span>
            </div>
            <div>
              <label class="block text-white mb-1">Ваше имя:</label>
              <input
                type="text"
                v-model="formData.name"
                class="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Иван Иванов"
              />
            </div>

            <div>
              <label class="block text-white mb-1">Электронная почта:</label>
              <input
                type="email"
                v-model="formData.email"
                class="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label class="block text-white mb-1">Номер телефона:</label>
              <input
                type="tel"
                v-model="formData.phone"
                class="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div class="pt-2 text-sm text-gray-400">
              <p class="text-gray-400">
                Доставка:
                <span class="font-bold text-white">{{
                  deliveryCost === 0
                    ? "Бесплатно"
                    : `${deliveryCost.toLocaleString("ru-RU")} ₽`
                }}</span>
              </p>
              <p>
                Итого к оплате:
                <span class="font-bold text-white"
                  >{{ finalOrderCost.toLocaleString("ru-RU") }} ₽</span
                >
              </p>
              <p class="mt-1">
                После оформления с вами свяжется наш менеджер в течение 15 минут
              </p>
            </div>
          </div>
        </div>

        <!-- Футер -->
        <div
          class="border-t border-gray-800 bg-gray-900/50 px-6 py-4 sm:flex sm:flex-row-reverse"
        >
          <button
            type="button"
            class="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-bold transition"
            @click="inputValidation()"
          >
            ОФОРМИТЬ ЗАКАЗ
          </button>
          <button
            type="button"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded font-bold transition mt-3 sm:mt-0 sm:ml-3 mr-2"
            @click="close"
          >
            ОТМЕНИТЬ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useImagesStore } from "@/stores/imagesStore.js";
import { useUserStore } from "@/stores/userStore";

export default {
  name: "ModalPopup",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    goods: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      userStore: useUserStore(),
      isVisible: this.modelValue,
      isMounted: false,
      errorMessage: "",
      formData: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  computed: {
    finalOrderCost() {
      if (this.userStore.orderCost >= 15000) {
        return this.userStore.orderCost;
      }  else {
        return this.userStore.orderCost + 2000;
      }
    },
    getImage() {
      const store = useImagesStore();
      return store.getImage;
    },
    deliveryCost() {
      return this.finalOrderCost >= 15000 ? 0 : 2000;
    },
  },
  methods: {
    inputValidation() {
      if (
        this.formData.name.length < 1 ||
        this.formData.email.length < 1 ||
        this.formData.phone.length < 1
      ) {
        this.errorMessage = "Необходимо заполнить все поля";
      } else {
        this.submitForm();
        this.errorMessage = "";
        this.formData.name = "";
        this.formData.email = "";
        this.formData.phone = "";
      }
    },
    close() {
      this.isVisible = false;
      this.$emit("update:modelValue", false);
      this.$emit("cancel");
      this.errorMessage = "";
    },
    submitForm() {
      this.isVisible = false;
      this.$emit("update:modelValue", false);
      this.$emit("success");
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