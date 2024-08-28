type Props = {
  count: number;
};

const NumberDisplay = ({ count }: Props) => {
  return <p>{count}</p>;
};

export default NumberDisplay;
