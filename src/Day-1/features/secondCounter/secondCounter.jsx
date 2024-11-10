import { useSelector } from "react-redux";

const SecondCounter = () => {
  const counterState = useSelector((state) => state.navdeepCounter);
  return (
    <div>
      <h1>Second Counter: {counterState.result}</h1>
    </div>
  );
};

export default SecondCounter;