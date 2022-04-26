import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;
