import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "meraCounter",
  initialState: {
    result: 75,
    products: [
      {
        id: 1,
        name: "iPhone 16 Pro Max",
      },
    ],
  },
  reducers: {
    increment: (state) => {
      state.result += 1;
    },
    decrement: (state) => {
      state.result -= 1;
    },
    incrementByAmount: (state, actions) => {
      console.log("Actions inside incrementByAmount: ", actions);
      state.result += actions.payload;
    },
    decrementByAmount: (state, actions) => {
      state.result -= actions.payload;
    },
    addNums: (state, actions) => {
      console.log("Actions inside addNums: ", actions);
      state.result = actions.payload.num1 + actions.payload.num2;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  addNums,
} = counterSlice.actions;

export default counterSlice.reducer;