<template>
  <div class="flex justify-center items-center mb-8">
    <div class="inline-flex items-center bg-black/30 px-4 py-2 rounded-lg">
      <span class="font-bold text-xl mr-3">🔥 До конца акции осталось:</span>
      <span class="font-mono text-2xl">
        {{ hours }}:{{ minutes }}:{{ seconds }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalSeconds: 4 * 3600 + 26 * 60 + 34, // 4 часа 26 минут 34 секунды
      timer: null,
    };
  },

  computed: {
    hours() {
      return Math.floor(this.totalSeconds / 3600)
        .toString()
        .padStart(2, "0");
    },

    minutes() {
      return Math.floor((this.totalSeconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
    },

    seconds() {
      return (this.totalSeconds % 60).toString().padStart(2, "0");
    },
  },

  mounted() {
    this.startTimer();
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.totalSeconds > 0) {
          this.totalSeconds--;
        } else {
          clearInterval(this.timer);
          this.timerEnded();
        }
      }, 1000);
    },

    timerEnded() {
      this.thankYouForYourAttention();
    },

    thankYouForYourAttention() {
      alert("Спасибо за внимание :)");
    },
  },
};
</script>