import React from "react";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => onSetDiff(parseInt(e.target.value, 10));
  return (
    <div>
      <h1>{number}</h1>
      <input type="number" value={diff} min="1" onChange={onChange} />
      <button onClick={onIncrease}>+{diff}</button>
      <button onClick={onDecrease}>-{diff}</button>
    </div>
  );
}
export default Counter;
