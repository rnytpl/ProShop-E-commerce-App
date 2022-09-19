import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "/api/products";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (name, thunkAPI) => {
    try {
      const response = await axios(URL);
      return response.data;
    } catch (error) {
      console.log(error);
      const message = error.response.data.message[0];
      const status = error.response.data.message[1];
      return thunkAPI.rejectWithValue(`${message}, ${status}`);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios(`${URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      const message = error.response.data.message[0];
      const status = error.response.data.message[1];
      return thunkAPI.rejectWithValue(`${message}, ${status}`);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    isLoading: false,
    productsError: null,
    productDetailError: null,
  },
  reducers: {
    addProduct(state, action) {
      state.product.qty = action.payload;
    },
    // incrementQty(state, action) {
    //   state.product.qty++;
    // },
    // decrementQty(state, action) {
    //   state.product.qty--;
    // },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.productsError = action.payload;
    },
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.productDetailError = null;
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.productDetailError = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
