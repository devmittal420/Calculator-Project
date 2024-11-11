import "/src/index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  inputValue,
  setOperator,
  calculateResult,
  clearDisplay,
  backspace,
} from "./calculatorslice";

const Calculator = () => {
  const [calculatorColor, setCalculatorColor] = useState("#FFDAB9");
  const [showCover, setShowCover] = useState(true);
  const colors = [
    "#FF6347",
    "#40E0D0",
    "#1E90FF",
    "#32CD32",
    "#FFD700",
    "#DC143C",
    "#8A2BE2",
    "#FF8C00",
    "#FF1493",
    "#00CED1",
    "#FF4500",
    "#98FB98",
    "#7FFF00",
    "#8B0000",
    "#A52A2A",
    "#D2691E",
    "#BA55D3",
    "#00BFFF",
    "#ADFF2F",
    "#FFDAB9",
  ];

  const calculateState = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  useEffect(() => {
    const onHandleKey = (e) => {
      const { key } = e;
      if (!isNaN(key)) {
        dispatch(inputValue(key));
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        dispatch(setOperator(key));
      } else if (key === "=" || key === "Enter") {
        dispatch(calculateResult(key));
      } else if (key === "c" || key === "Escape") {
        dispatch(clearDisplay(key));
      } else if (key === "Backspace") {
        dispatch(backspace());
      }
    };
    window.addEventListener("keydown", onHandleKey);
    return () => window.removeEventListener("keydown", onHandleKey);
  }, [dispatch]);

  const onHandleNumber = (num) => {
    dispatch(inputValue(num));
  };
  const onHandleOperator = (operator) => {
    dispatch(setOperator(operator));
  };
  const onHandleEqual = () => {
    dispatch(calculateResult());
  };
  const onHandleClear = () => {
    dispatch(clearDisplay());
  };
  // const onHandleToggle = () => {
  //   const randomColor = Math.floor(Math.random() * colors.length);
  //   setCalculatorColor(colors[randomColor]);
  // };
  const toggleCover = () => {
    setShowCover(!showCover);
  };

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div
        className={`relative w-full max-w-sm p-6 rounded-3xl shadow-md`}
        style={{ backgroundColor: calculatorColor }}
      >
        {/* Sliding Cover */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gray-700 transition-transform duration-500 ease-in-out ${
            showCover
              ? "transform -translate-y-0"
              : "transform -translate-y-full"
          }`}
          style={{ zIndex: 10 }}
        >
          <button
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded"
            onClick={toggleCover}
          >
            Open Calculator
          </button>
        </div>

        {!showCover && (
          <button
            className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded"
            onClick={toggleCover}
          >
            Close Calculator
          </button>
        )}

        {/* Calculator Content */}
        <div>
          <h1 className="font-bold p-5 -mt-3 text-white">My Calculator</h1>
          <div className="text-right p-4 rounded mb-3 bg-white">
            <p>{calculateState.inputStr || 0}</p>
            <p className="h-3 font-thin">{calculateState.result}</p>
          </div>

          <div className="grid grid-cols-4 gap-2 ">
            <button
              className="col-span-2 p-2 bg-red-500 rounded text-white hover:bg-red-700 duration-300"
              onClick={onHandleClear}
            >
              AC
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:text-white hover:bg-gray-400 duration-300"
              onClick={() => onHandleOperator("%")}
            >
              %
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:text-white hover:bg-gray-400 duration-300"
              onClick={() => onHandleOperator("/")}
            >
              /
            </button>
            {/* Number and operator buttons */}
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(7)}
            >
              7
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(8)}
            >
              8
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(9)}
            >
              9
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:text-white hover:bg-gray-400 duration-300"
              onClick={() => onHandleOperator("*")}
            >
              *
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(4)}
            >
              4
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(5)}
            >
              5
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(6)}
            >
              6
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:text-white hover:bg-gray-400 duration-300"
              onClick={() => onHandleOperator("-")}
            >
              -
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(1)}
            >
              1
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(2)}
            >
              2
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(3)}
            >
              3
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:text-white hover:bg-gray-400 duration-300"
              onClick={() => onHandleOperator("+")}
            >
              +
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber("00")}
            >
              00
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber("0")}
            >
              0
            </button>
            <button
              className="p-2 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
              onClick={() => onHandleNumber(".")}
            >
              .
            </button>
            <button
              className="p-2 bg-gray-300 rounded hover:text-white hover:bg-gray-400 duration-300"
              onClick={onHandleEqual}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
