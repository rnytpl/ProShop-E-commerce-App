import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQty: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const { product, qty } = action.payload;
      const newItem = product;
      console.log(newItem);
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      if (!existingItem) {
        state.cartItems.push({ ...newItem, qty: qty });
        state.totalQty++;
        state.totalAmount = state.totalAmount + (newItem.price * qty)
      } else {
        existingItem.qty += qty;
        state.totalAmount = state.totalAmount + (existingItem.price * qty)
      }
    },
  },
});

export const cartActions = cartSlice.actions;
