import "/src/index.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  inputValue,
  setOperator,
  calculateResult,
  clearDisplay,
  backspace,
} from "./calculatorslice";

const Calculator = () => {
  const [calculatorColor, setCalculatorColor] = useState("#FFDAB9");
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
      console.log("key: ", key);

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
  }, []);
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
  const onHandleToggle = () => {
    const randomColor = Math.floor(Math.random() * colors.length);

    setCalculatorColor(colors[randomColor]);
  };
  console.log("result: ", calculateState.result);

  return (
    <div className="">
      <div className=" bg-blue-100 min-h-screen flex justify-center items-center h-0 w-full m-0 fixed">
        <div
          className={`p-6 rounded-3xl shadow-md ${calculatorColor}`}
          style={{ backgroundColor: calculatorColor }}
        >
          <h1 className="font-bold p-5 -mt-3 text-white">My Calculator</h1>
          <div className="text-right p-4 rounded mb-3 bg-white">
            <p>{calculateState.inputStr || 0}</p>
            <p className="h-3 font-thin">{calculateState.result}</p>
          </div>

          <div className="grid grid-cols-4 gap-2 ">
            {/* First Row*/}
            <button
              className="col-span-2 p-2 bg-red-500 rounded text-white hover:bg-red-700 duration-300"
              onClick={() => onHandleClear()}
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
            {/* Second Row*/}
            <button
              className="p-2  bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
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
              className="p-2 w-20 bg-white rounded hover:text-white hover:bg-gray-200 duration-300"
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
            {/* Third Row*/}
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
            {/* Fourth Row*/}
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
            {/* Fifth Row*/}
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
              onClick={() => onHandleEqual("=")}
            >
              =
            </button>
          </div>
        </div>
        <button
          className={`bg-gray-600 w-fit p-1 ml-3 rounded-md hover:text-white `}
          style={{ backgroundColor: calculatorColor }}
          onClick={onHandleToggle}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Calculator;
