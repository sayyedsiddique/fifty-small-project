import { useState } from "react";
import "./App.css";

function App() {
  const [leftActive, setLeftActive] = useState(true)
  console.log("leftActive ", leftActive)

  const leftHoverEnterHandler = (e) => {
    console.log("e enter", e)
    // setLeftActive(true)
  }

  const leftHoverLeaveHandler = (e) => {
    // console.log("e leave", e)
    // setLeftActive(false)
  }

  return (
    <div className={leftActive ? "parent hover-left" : "parent"}>
      <div className="split-container left" onMouseEnter={leftHoverEnterHandler} onMouseLeave={leftHoverLeaveHandler}>
        <h1>Playstation 5</h1>
        <button>Buy Now</button>
      </div>
      <div className="split-container right">
        <h1>XBox Series X</h1>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default App;
