<template>
  <div class="bg-purple-900 overflow-hidden whitespace-nowrap py-3 relative">
    <div class="inline-block whitespace-nowrap animate-marquee">
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
    </div>
    <div class="inline-block whitespace-nowrap animate-marquee2 absolute top-3">
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
      <span class="text-xl font-bold mx-8"
        >{{ content }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: 'YORISHOP'
        }
    }
}
</script>

<style scoped>
/* Анимация бегущей строки */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  display: inline-block;
  animation: marquee 50s linear infinite;
}

.animate-marquee2 {
  display: inline-block;
  animation: marquee 50s linear infinite;
  animation-delay: 0s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>