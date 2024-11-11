import { createSlice } from "@reduxjs/toolkit";
import SetOperatorResult from "../components/setOperatorSwitchComp";
const initialState = {
  currentValue: "0",
  previousValue: "",
  operator: null,
  inputStr: "0",
  result: "",
};

const CalculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.currentValue = `${state.currentValue}${action.payload}`;
      console.log("state: ", state.currentValue);

      state.inputStr = `${state.inputStr}${action.payload}`;
    },
    setOperator: (state, action) => {
      if (state.currentValue === "") return;

      let previousResult;
      switch (state.operator) {
        case "+":
          previousResult = +state.previousValue + +state.currentValue;
          break;
        case "-":
          previousResult = +state.previousValue - +state.currentValue;
          break;
        case "*":
          previousResult = +state.previousValue * +state.currentValue;
          break;
        case "/":
          previousResult = +state.previousValue / +state.currentValue;
          break;
        case "%":
          previousResult = +state.previousValue % +state.currentValue;
          break;
        default:
          previousResult = +state.currentValue;
      }
      // const previousResult = SetOperatorResult({
      //   previousValue: state.previousValue,
      //   currentValue: state.currentValue,
      //   operator: state.operator,
      // });
      state.previousValue = previousResult;
      state.operator = action.payload;
      state.inputStr += action.payload;
      state.currentValue = "0";
    },
    calculateResult: (state) => {
      // const result = SetOperatorResult({
      //   previousValue: state.previousValue,
      //   currentValue: state.currentValue,
      //   operator: state.operator,
      // });
      let previousResult;
      switch (state.operator) {
        case "+":
          previousResult = +state.previousValue + +state.currentValue;
          break;
        case "-":
          previousResult = +state.previousValue - +state.currentValue;
          break;
        case "*":
          previousResult = +state.previousValue * +state.currentValue;
          break;
        case "/":
          previousResult = +state.previousValue / +state.currentValue;
          break;
        case "%":
          previousResult = +state.previousValue % +state.currentValue;
          break;
        default:
          previousResult = +state.currentValue;
      }
      console.log("previousValue: ", state.previousValue);
      console.log("currentValue: ", state.currentValue);
      console.log("operator: ", state.operator);
      console.log("previousResult: ", state.previousResult);

      state.result = previousResult;
    },
    clearDisplay: (state) => {
      state.currentValue = "0";
      state.previousValue = "";
      state.operator = null;
      state.inputStr = "0";
      state.result = "0";
    },
    backspace: (state) => {
      state.currentValue = state.currentValue.slice(0, -1);
      state.inputStr = state.inputStr.slice(0, -1);

      if (state.currentValue === "") {
        state.currentValue = "0";
      }
      if (state.inputStr === "") {
        state.inputStr = "0";
      }
    },
  },
});

export const {
  inputValue,
  setOperator,
  calculateResult,
  clearDisplay,
  backspace,
} = CalculatorSlice.actions;

export default CalculatorSlice.reducer;
