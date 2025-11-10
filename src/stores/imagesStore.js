// src/store/imagesStore.js
import { defineStore } from 'pinia'

// Динамически импортируем все изображения из папки
const importAll = (context) => context.keys().reduce((acc, key) => {
  const imageName = key.replace('./', '').split('.')[0]
  acc[imageName] = context(key)
  return acc
}, {})

const imagesContext = require.context(
  '@/assets/images', // путь к вашей папке с изображениями
  false, // не искать в подпапках
  /\.(png|jpe?g|svg|gif|webp)$/ // разрешенные форматы
)

export const useImagesStore = defineStore('images', {
  state: () => ({
    images: importAll(imagesContext)
  }),
  getters: {
    getImage: (state) => (imageName) => state.images[imageName]
  }
})