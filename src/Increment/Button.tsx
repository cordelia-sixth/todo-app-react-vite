type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

const Button = ({ onIncrement, onDecrement }: Props) => {
  return (
    <>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Button;
