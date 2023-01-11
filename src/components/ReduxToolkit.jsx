import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../ReduxToolkit/counterSlice";

// import counterReducer from "../Redux/reducers";

const ReduxToolkit = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <>
      <h1>ReduxApp</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() => dispatch(increment())} style={{ margin: "10px" }}>
        Increment
      </button>
      <button onClick={() => dispatch(reset())} style={{ margin: "10px" }}>
        Reset
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: "10px" }}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementByAmount(6))}>
        IncreaseByAmount
      </button>
    </>
  );
};

export default ReduxToolkit;
