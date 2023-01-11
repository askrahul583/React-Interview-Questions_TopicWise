import React, { useState } from "react";

const UseStateExample = () => {
  const [counter, setCounter] = useState(() => {
    return 0;
  });
  function increment() {
    setCounter((prevcounter) => prevcounter + 1);
  }
  function decrement() {
    setCounter((prevcounter) => prevcounter - 1);
  }
  return (
    <>
      <h2>UseStateExample</h2>
      <button style={{ margin: "10px", fontSize: "20px" }} onClick={increment}>
        Increment
      </button>
      <p style={{ margin: "10px", fontSize: "20px" }}>{counter}</p>
      <button style={{ margin: "10px", fontSize: "20px" }} onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default UseStateExample;
