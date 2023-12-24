import { useRef, useState } from "react";
import "./App.css";

function App() {
  const loadingRef = useRef(null);
  const parentRef = useRef(null);
  const [loading, setLoading] = useState(0);

  console.log("loadingRef ", loadingRef);

  let load = 0;

  let stopSetInterval = setInterval(bluring, 30);

  function bluring() {
    load++;

    if (load > 99) {
      clearInterval(stopSetInterval);
    }

    console.log("load ", load);
    if (loadingRef.current && parentRef.current) {
      loadingRef.current.innerText = `${load}%`;
      loadingRef.current.style.opacity = scale(load, 0, 100, 1, 0)
      parentRef.current.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`
    }
  }

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <div className="parent" >
      <section className="bg" ref={parentRef}></section>

      <div className="loading-text" ref={loadingRef}>
        {load}%
      </div>
    </div>
  );
}

export default App;
