import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter current value is : {counterVal}</p>;
};

export default DisplayCounter;
