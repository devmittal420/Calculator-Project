import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter.slice";

const store = configureStore({
  reducer: {
    navdeepCounter: counterReducer,
  },
});

export default store;