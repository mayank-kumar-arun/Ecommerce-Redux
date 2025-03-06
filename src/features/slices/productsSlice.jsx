import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filteredProducts(state, action) {
      try {
        const filter = storeData.filter((data) => data.type === action.payload);
        state.filteredProducts = filter;
        console.log("filtered", filter);
        state.error = false;
        const saveData = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveData);
      } catch (error) {
        return error;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (data) => data.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveData = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveData);
      } catch (error) {
        return error;
      }
    },
    filterGender(state, action) {
      try {
        const gender = state.filteredProducts.filter(
          (item) => item.gender === action.payload
        );
        state.error = false;
        state.filteredProducts = gender;
        if (gender.length > 0) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    sortByPrice(state, action) {
      try {
        const price = state.filteredProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {
          state.error = false;
          state.filteredProducts = price;
          const saveState = JSON.stringify(price);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (error) {
        return error;
      }
    },
    filterByColor(state, action) {
      const color = state.filteredProducts.filter((item) =>
        item.color.includes(action.payload)
      );
      state.error = false;
      state.filteredProducts = color;
      if (color.length <= 0) {
        state.error = true;
        state.filteredProducts = [];
      } else {
        state.error = false;
        state.filteredProducts = color;
        const saveState = JSON.stringify(color);
        sessionStorage.setItem("filteredData", saveState);
      }
    },
    filterBySize(state, action) {
      const size = state.filteredProducts.filter((item) =>
        item.size.includes(action.payload)
      );
      state.error = false;
      state.filteredProducts = size;
      if (size.length <= 0) {
        state.error = true;
        state.filteredProducts = [];
      } else {
        state.error = false;
        state.filteredProducts = size;
        const saveState = JSON.stringify(size);
        sessionStorage.setItem("filteredData", saveState);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  filteredProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productsSlice.actions;

export default productsSlice.reducer;
