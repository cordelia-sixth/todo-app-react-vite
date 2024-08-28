import { useState } from "react";
import Button from "./Button";
import NumberDisplay from "./NumberDisplay";

const Increment = () => {
  const [count, setCount] = useState<number>(0);

  const onIncrement = () => {
    setCount((count) => count + 1);
  };

  const onDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <NumberDisplay count={count} />
      <Button onIncrement={onIncrement} onDecrement={onDecrement} />
    </>
  );
};

export default Increment;
