import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    price: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            amount: 1,
            totalPrice: productId.price,
            size: productId.size,
            color: productId.color,
            name: productId.name,
            img: productId.img,
            text: productId.text,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (error) {
        return error;
      }
    },
    removefromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          console.log("entered in else before", exist.amount, exist.totalPrice);
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
          console.log("entered in else after", exist.amount, exist.totalPrice);
        }
      } catch (error) {}
    },
  },
});

export const { addToCart, removefromCart } = cartSlice.actions;
export default cartSlice.reducer;
