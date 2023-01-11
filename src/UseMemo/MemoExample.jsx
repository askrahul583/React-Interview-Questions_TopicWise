import React, { useMemo } from "react";
import { useState } from "react";

const MemoExample = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    console.log("Magic");
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  function incrementByOne() {
    setCounterOne(counterOne + 1);
  }

  function incrementByTwo() {
    setCounterTwo(counterTwo + 2);
  }
  return (
    <>
      <button onClick={incrementByOne}>CounterOne {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={incrementByTwo}>CounterTwo {counterTwo}</button>
    </>
  );
};

export default MemoExample;
