import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
// import UseStateExample from "./UseState/UseStateExample";
// import ReduxApp from "./components/ReduxApp";
// import ReduxToolkit from "./components/ReduxToolkit";
// import UseEffectExample from "./UseEffect/UseEffectExample";
// import PreviousValueByRef from "./RefExample/PreviousValueByRef";
// import RenderCount from "./RefExample/RenderCount";
// import UseRefExample from "./RefExample/UseRefExample";
// import MemoExample from "./UseMemo/MemoExample";
// import Parent from "./ChildToParent/Parent";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);
  return (
    <div className="App">
      <h1>React Interview Practice</h1>
      {/* <Parent /> */}
      {/* <MemoExample /> */}
      {/* <UseRefExample /> */}
      {/* <RenderCount /> */}
      {/* <PreviousValueByRef /> */}
      {/* <ReduxApp /> */}
      {/* <ReduxToolkit /> */}
      {/* <UseEffectExample /> */}
      {/* <UseStateExample /> */}
      <ProgressBar value={value} max={100} />
    </div>
  );
}

export default App;
