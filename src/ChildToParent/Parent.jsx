import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(() => {
    return 0;
  });
  function getDataFromChild(e) {
    setData(e.target.value);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <p>{data}</p>
      <p>{count}</p>
      <Child getDataFromChild={getDataFromChild} increment={increment} />
    </div>
  );
};

export default Parent;
