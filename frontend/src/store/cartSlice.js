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
      } else {
        existingItem.qty += qty;
        state.totalQty++;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
