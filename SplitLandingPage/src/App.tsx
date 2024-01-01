import { useState } from "react";
import "./App.css";

function App() {
  const [leftActive, setLeftActive] = useState(false);
  console.log("leftActive ", leftActive);
  const [rightActive, setRightActive] = useState(false);

  const leftHoverEnterHandler = () => {
    setLeftActive(true);
  };

  const leftHoverLeaveHandler = () => {
    // console.log("e leave", e)
    setLeftActive(false);
  };

  const rightHoverEnterHandler = () => {
    setRightActive(true);
  };

  const rightHoverLeaveHandler = () => {
    setRightActive(false);
  };

  return (
    <div
      className={
        leftActive
          ? "parent hover-left"
          : rightActive
          ? "parent hover-right"
          : "parent"
      }
    >
      <div
        className="split-container left"
        onMouseEnter={leftHoverEnterHandler}
        onMouseLeave={leftHoverLeaveHandler}
      >
        <h1>Playstation 5</h1>
        <button>Buy Now</button>
      </div>
      <div
        className="split-container right"
        onMouseEnter={rightHoverEnterHandler}
        onMouseLeave={rightHoverLeaveHandler}
      >
        <h1>XBox Series X</h1>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default App;
