import React from "react";
import { useRef } from "react";

const UseRefExample = () => {
  const inputElement = useRef();

  const inputFocus = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={inputFocus}>Focus Input</button>
    </div>
  );
};

export default UseRefExample;
