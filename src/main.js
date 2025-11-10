import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createPinia } from 'pinia'
import router from './router'
import '@fontsource/inter'; 


createApp(App).use(createPinia()).use(router).mount('#app')
