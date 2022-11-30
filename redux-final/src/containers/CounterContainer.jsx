import React from "react";
import Counter from "../components/Counter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter.jsx";

function CounterContainer() {
  const number = useSelector((state) => state.counter.number);
  const diff = useSelector((state) => state.counter.diff);
  const dispatch = useDispatch();

  const onSetDiff = (diff) => {
    dispatch(setDiff(diff));
  };
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  return (
    <Counter
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
}

export default CounterContainer;
