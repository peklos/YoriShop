import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    cart: [],
    favorite: [],
  }),
  actions: {
    toggleMoveToCard(product) {
      if (!this.isCartInclude(product)) {
        this.cart.push({...product, sum: 1});
      } else {
        const index = this.cart.findIndex((item) => item.id === product.id);

        this.cart.splice(index, 1);
      }
    },

    toggleMoveToFavorite(product) {
      if (!this.isFavInclude(product)) {
        this.favorite.push(product);
      } else {
        const index = this.favorite.findIndex((item) => item.id === product.id);

        this.favorite.splice(index, 1);
      }
    },
  },
  getters: {
    isCartInclude: (state) => (product) => {
      return state.cart.some((item) => item.id === product.id);
    },

    isFavInclude: (state) => (product) => {
      return state.favorite.some((item) => item.id === product.id);
    },
  },
});
