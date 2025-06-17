<template>
  <div class="min-h-screen flex flex-col">
    <Navbar class="sticky top-0 z-50" />
    
    <main class="flex-grow ">
       <router-view></router-view>
    </main>
    
    <Footer class="bg-gray-100 dark:bg-gray-800 p-4" />
  </div>
</template>

<script>
import Navbar from './components/NavbarMain.vue'
import Footer from './components/FooterMain.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Inter;
}

/* Фон всей полосы прокрутки SCROLLBAR справа */
::-webkit-scrollbar {
  width: 12px; /* ширина скролла */
  background-color: black; /* фон скролла */
}

/* Сам ползунок */
::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: #571c86;
}

/* Опционально: при наведении на ползунок */
::-webkit-scrollbar-thumb:hover {
  background-color: #7023af; 
}

</style>
