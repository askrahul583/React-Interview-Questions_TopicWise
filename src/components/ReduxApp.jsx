import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Redux/actions";
// import counterReducer from "../Redux/reducers";


const ReduxApp = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

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
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default ReduxApp;
