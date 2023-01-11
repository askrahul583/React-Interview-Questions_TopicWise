import React from "react";

const Child = ({ getDataFromChild, increment }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type Something"
        onChange={getDataFromChild}
      />
      <br />
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Child;
