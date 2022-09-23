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
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      if (!existingItem) {
        state.cartItems.push({ ...newItem, qty: qty });
        state.totalAmount = state.totalAmount + (newItem.price * qty)
      } else {
        existingItem.qty += qty;
        state.totalAmount = state.totalAmount + (existingItem.price * qty)
      }
    },
    clearCart(state, action) {
      state.cartItems = []
      state.totalAmount = 0
    },
    removeItemFromCart(state, action) {
      const findItem = action.payload
      state.cartItems = state.cartItems.filter(item => item._id !== findItem._id)
      state.totalAmount -= findItem.price * findItem.qty
    }
  },
});

export const cartActions = cartSlice.actions;
