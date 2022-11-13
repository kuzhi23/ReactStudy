import React from "react";
import Counter from "../components/Counter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAsync, increaseAsync } from "../moidules/counter.jsx";

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
