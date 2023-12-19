import { useState } from "react";
import "./App.css";

function App() {
  const [activeSteps, setActiveSteps] = useState(1);
  const [totalCircles, setTotalCircles] = useState(4);
  console.log("activeSteps... ", activeSteps);
  console.log("totalCircles... ", totalCircles);

  console.log(((activeSteps - 1) / (totalCircles - 1)) * 100 + "%");

  const nextHandler = () => {
    setActiveSteps(activeSteps + 1);
  };

  const prevHandler = () => {
    setActiveSteps(activeSteps - 1);
  };
  return (
    <div className="parent-container">
      <div className="child-container">
        <div
          className="progress"
          id="progress"
          style={{
            width: `${((activeSteps - 1) / (totalCircles - 1)) * 100 + "%"} `,
          }}
        ></div>
        <div className="circle active">1</div>
        <div className={activeSteps >= 2 ? "circle active" : "circle"}>2</div> 
        <div className={activeSteps >= 3 ? "circle active" : "circle"}>3</div>
        <div className={activeSteps >= 4 ? "circle active" : "circle"}>4</div>
      </div>
      <div className="btn-container">
        <button
          className={activeSteps === 1 ? "prev disable" : "prev"}
          onClick={prevHandler}
          disabled={activeSteps === 1 ? true : false}
        >
          Prev
        </button>
        <button
          className={activeSteps === totalCircles ? "next disable" : "next"}
          onClick={nextHandler}
          disabled={activeSteps === totalCircles ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
