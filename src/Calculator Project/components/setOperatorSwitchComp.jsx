const setOperatorResult = ({previousValue,currentValue,operator}) => {
  let previousResult;
  switch (operator) {
    case "+":
      previousResult = +previousValue + +currentValue;
      break;
    case "-":
      previousResult = +previousValue - +currentValue;
      break;
    case "*":
      previousResult = +previousValue * +currentValue;
      break;
    case "/":
      previousResult = +previousValue / +currentValue;
      break;
    case "%":
      previousResult = +previousValue % +currentValue;
      break;
    default:
      previousResult = +currentValue;
  }
  return previousResult;
};
export default setOperatorResult;
