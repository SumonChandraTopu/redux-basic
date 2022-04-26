import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment : (state) => {
      state.count += 1;
    },
    decrement : (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = productsSlice.actions;
export default productsSlice.reducer;
