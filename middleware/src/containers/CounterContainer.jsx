import React from "react";
import Counter from "../components/Counter.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter.jsx";

function CounterContainer() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);

  const onIncrease = () => dispatch(increaseAsync());

  const onDecrease = () => dispatch(decreaseAsync());
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
