import { defineStore } from "pinia";

export const useFilterStore = defineStore("filters", {
  state: () => ({
    selectedCategories: [],
    selectedBrands: [],
    selectedSizes: [],
    selectesSeasons: [],
    priceRange: [0, 150000],
    availableCategories: [
      "Верх",
      "Низ",
      "Обувь",
      "Аксессуары",
    ],
    availableBrands: [
      "Balenciaga",
      "Prada",
      "Yori Sport",
      "Givenchy",
      "Maison Margiela",
      "Vetements",
      "Off-White",
      "Gucci",
      "Loewe",
      "Burberry",
      "Rick Owens",
      "Stone Island",
      "Fear of God",
      "Heron Preston",
      "Acne Studios",
      "Raf Simons",
      "Celine",
      "Alexander McQueen",
    ],
    availableSizes: ["XS", "S", "M", "L", "XL", "XXL"],
    availableSeasons: ["ЗИМА", "ВЕСНА", "ЛЕТО", "ОСЕНЬ"],
  }),

  getters: {
    hasActiveFilters(state) {
      return (
        state.selectedCategories.length > 0 ||
        state.selectedBrands.length > 0 ||
        state.selectedSizes.length > 0 ||
        state.selectesSeasons > 0 ||
        state.priceRange[0] > 0 ||
        state.priceRange[1] < 150000
      );
    },
  },

  actions: {
    resetFilters() {
      this.selectedCategories = [];
      this.selectedBrands = [];
      this.selectedSizes = [];
      this.selectesSeasons = [];
      this.priceRange = [0, 150000];
    },
  },
});
