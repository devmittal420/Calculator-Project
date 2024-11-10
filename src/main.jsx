import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./features/counter/counter.layout";
import SecondCounter from "./features/secondCounter/secondCounter";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
    <hr />
    <SecondCounter />
    <hr />
    <SecondCounter />
    <hr />
    <SecondCounter />
    <hr />
    <SecondCounter />
    <hr />
    <SecondCounter />
    <hr />
    <SecondCounter />{" "}
  </Provider>
);
