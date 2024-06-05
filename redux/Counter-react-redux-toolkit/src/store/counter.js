import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal += 1;
    },
    decrement: (state) => {
      state.counterVal -= 1;
    },
    add: (state, action) => {
      console.log(state, action);
      state.counterVal += Number(action.payload.counter);
    },
    substract: (state, action) => {
      console.log(state, action);
      state.counterVal -= Number(action.payload.counter);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
