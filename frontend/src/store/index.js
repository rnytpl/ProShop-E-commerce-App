import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

const store = configureStore({
  reducer: { product: productSlice.reducer },
});

export default store;

// Here is my way of implementing redux inside the project :
