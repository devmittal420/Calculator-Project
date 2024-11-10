import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "./Calculator Project/counter/calculatorslice";

const calculatorStore = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
});

export default calculatorStore;
