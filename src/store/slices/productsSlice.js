// Import: Packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// AsyncThunk: getProducts
export const getProducts = createAsyncThunk(
  "getProducts/getProducts",
  async (arg, { getState }) => {}
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {},
    [getProducts.fulfilled]: (state, { payload }) => {},
    [getProducts.rejected]: (state, action) => {},
  },
});

export const {} = productsSlice.actions;

// Reducer: productsSlice.reducer
export default productsSlice.reducer;
