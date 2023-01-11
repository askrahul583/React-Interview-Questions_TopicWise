import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    reset: (state, action) => {
      state.counter = 0;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
