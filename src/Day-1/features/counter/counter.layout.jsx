import { useDispatch, useSelector } from "react-redux";
import {
  addNums,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counter.slice";

const Counter = () => {
  const counterState = useSelector((state) => state.navdeepCounter);
  const dispatch = useDispatch();
  console.log("counterState: ", counterState);

  return (
    <div>
      <h1>My Counter: {counterState.result}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(11))}>
          Increment By 11
        </button>
        <button onClick={() => dispatch(decrementByAmount(10))}>
          Decrement By 10
        </button>
        <button onClick={() => dispatch(addNums({ num1: 4, num2: 6 }))}>
          Add 4 & 6
        </button>
      </div>
    </div>
  );
};

export default Counter;