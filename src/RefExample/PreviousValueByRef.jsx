import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const PreviousValueByRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");
  
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h2>PreviousValueByRef</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <span>
          My name is {name} and it used to be {prevName.current}
        </span>
      </div>
    </div>
  );
};

export default PreviousValueByRef;
