import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: null,
};

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
      console.log(response);
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
  initialState: initialState,
  reducers: {},
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
      state.error = action.payload;
    },
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
