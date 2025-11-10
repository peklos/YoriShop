import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    const savedCart = localStorage.getItem("userCart");
    const savedFav = localStorage.getItem("userFav");

    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
      favorite: savedFav ? JSON.parse(savedFav) : [],
      purchase: {},
    };
  },
  actions: {
    productSumDecrease(product) {
      if (product.sum > 1) {
        product.sum -= 1;
        this.saveToLocalStorege("userCart", this.cart);
      } else {
        this.toggleMoveToCard(product);
      }
    },

    productSumIncrease(product) {
      product.sum += 1;
      this.saveToLocalStorege("userCart", this.cart);
    },

    toggleMoveToCard(product) {
      if (!this.isCartInclude(product)) {
        this.cart.push({ ...product, sum: 1 });
      } else {
        const index = this.cart.findIndex((item) => item.id === product.id);

        this.cart.splice(index, 1);
      }

      this.saveToLocalStorege("userCart", this.cart);
    },

    toggleMoveToFavorite(product) {
      if (!this.isFavInclude(product)) {
        this.favorite.push(product);
      } else {
        const index = this.favorite.findIndex((item) => item.id === product.id);

        this.favorite.splice(index, 1);
      }

      this.saveToLocalStorege("userFav", this.favorite);
    },

    saveToLocalStorege(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    getCurrentPrice(product) {
      return product.new_price * product.sum;
    },
  },

  getters: {
    orderCost() {
      return this.cart.reduce((total, product) => {
        return total + this.getCurrentPrice(product);
      }, 0);
    },
    isCartInclude: (state) => (product) => {
      return state.cart.some((item) => item.id === product.id);
    },

    isFavInclude: (state) => (product) => {
      return state.favorite.some((item) => item.id === product.id);
    },

    totalCartCounter() {
      return this.cart.length;
    },

    totalFavCounter() {
      return this.favorite.length;
    },
  },
});
