import { useState } from "react";
import "./App.css";

function App() {
  const [completedSteps, setCompletedSteps] = useState({})
  return (
    <div className="parent-container">
      <div className="child-container">
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>
      <div className="btn-container">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
}

export default App;
