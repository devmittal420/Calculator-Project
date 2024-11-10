import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import calculatorStore from "./calculatorStore";
import Calculator from "./Calculator Project/counter/calculator";

createRoot(document.getElementById("root")).render(
  <Provider store={calculatorStore}>
    <Calculator />
  </Provider>
);
