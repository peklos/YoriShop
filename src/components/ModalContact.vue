<template>
  <transition name="modal">
    <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <!-- Overlay -->
        <transition name="modal-fade">
          <div
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
            @click="$emit('update:modelValue', false)"
          >
            <div class="absolute inset-0 bg-black opacity-70"></div>
          </div>
        </transition>

        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-gradient-to-br from-gray-900 to-purple-900/100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="px-6 py-5 sm:p-8">
            <!-- Close button -->
            <button
              class="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              @click="$emit('update:modelValue', false)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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

            <!-- Title -->
            <h3 class="text-2xl font-bold mb-6 text-center">
              СВЯЗАТЬСЯ С НАМИ
            </h3>

            <!-- Contact methods -->
            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-purple-600/30 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-400">Телефон</p>
                  <p class="text-lg font-bold">+7 (495) 123-45-67</p>
                  <p class="text-sm text-gray-400 mt-1">
                    Ежедневно с 9:00 до 21:00
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-purple-600/30 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-400">Email</p>
                  <p class="text-lg font-bold">info@yourbrand.com</p>
                  <p class="text-sm text-gray-400 mt-1">
                    Ответим в течение 24 часов
                  </p>
                </div>
              </div>

              <!-- Social -->
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-purple-600/30 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-400">
                    Социальные сети
                  </p>
                  <div class="flex space-x-4 mt-2">
                    <a
                      v-for="icon in icons"
                      :key="icon.name"
                      class="w-8"
                      :href="icon.url"
                      target="_blank"
                    >
                      <img
                        :src="getImage(icon.name)"
                        class="invert shadow-md shadow-[0_0_10px_white] rounded-lg hover:shadow-[0_0_10px_black] duration-200 transition-shadow"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <!-- Contact form -->
              <div class="mt-8">
                <h4 class="text-lg font-bold mb-4">НАПИШИТЕ НАМ</h4>
                <form @submit.prevent="submitForm">
                  <div class="space-y-4">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-400 mb-1"
                        >Имя</label
                      >
                      <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-400 mb-1"
                        >Email</label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-400 mb-1"
                        >Сообщение</label
                      >
                      <textarea
                        id="message"
                        v-model="form.message"
                        rows="4"
                        class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition"
                  >
                    ОТПРАВИТЬ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {useImagesStore} from '@/stores/imagesStore'

export default {
  name: "ModalContact",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    getImage() {
      const store = useImagesStore();

      return store.getImage;
    }
  },
  data() {
    return {
      isVisible: this.modelValue,
      form: {
        name: "",
        email: "",
        message: "",
      },
      icons: [
        { name: "vk", url: "https://vk.com/peklos" },
        { name: "tg", url: "https://t.me/asdasd666asd" },
        { name: "gh", url: "https://github.com/peklos" },
      ],
    };
  },
  watch: {
    modelValue(newVal) {
      this.isVisible = newVal;
      if (newVal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  mounted() {
    if (this.modelValue) {
      document.body.style.overflow = "hidden";
    }
  },
  unmounted() {
    document.body.style.overflow = "";
  },
  methods: {
    submitForm() {
      alert("Спасибо за внимание :)");
      this.form = {
        name: "",
        email: "",
        message: "",
      };
      this.$emit("update:modelValue", false);
    },
  },
};
</script>


<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>