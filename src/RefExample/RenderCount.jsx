import React, { useRef, useState } from "react";
import { useEffect } from "react";

const RenderCount = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current);
  });
  return (
    <div>
      <h2>renderCount</h2>
      <span>My Name is {name}</span>
      <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <span>I rendered {renderCount.current} times</span>
    </div>
  );
};

export default RenderCount;
