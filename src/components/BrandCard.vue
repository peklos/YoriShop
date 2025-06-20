<template>
  <div
    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:scale-105"
    @click="$emit('click')"
  >
    <div class="relative h-48 overflow-hidden">
      <div
        class="absolute inset-0 bg-gray-800 flex items-center justify-center"
      >
        <img :src="getImage(img)" alt="">
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
        {{ brand }}
      </h3>
      <p class="text-gray-400 text-sm">{{ description }}</p>
      <div v-if="isTop" class="mt-3">
        <span class="bg-purple-600 text-xs px-2 py-1 rounded-full font-bold"
          >TOP BRAND</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useImagesStore } from "@/stores/imagesStore";

export default {
  name: "BrandCard",
  props: {
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isTop: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],

  computed: {
    getImage() {
      const imgStore = useImagesStore();

      return imgStore.getImage;
    },
  },
};
</script>