import React from "react";
import { decrease, increase, setDiff } from "../modules/counter.js";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter.jsx";

function CounterContainer() {
  // const { diff, number } = useSelector((state) => {
  //   console.log(state, "=======");
  //   return {
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   };
  // });
  const diff = useSelector((state) => state.counter.diff);
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
      number={number}
      diff={diff}
    />
  );
}
export default CounterContainer;
