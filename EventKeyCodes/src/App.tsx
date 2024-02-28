import { useEffect } from "react";
import "./App.css";

function App() {
  const handleKeyDown = (e: any) => {
    // Your provided code goes here
    // ...
    console.log("e ", e.key);
    const parent = document.getElementById("parent");
    console.log("parent ", parent)
    parent.innerHTML = ` 
    <div className="key inline-flex relative shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
      ${e.key === " " ? "Space" : e.key}
      <small className="absolute -top-8 text-white font-medium">
      ${e.key}
      </small>
    </div>

    <div className="key inline-flex relative shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
      ${e.keyCode}
      <small className="absolute -top-8 text-white font-medium">
      ${e.keyCode}
      </small>
    </div>

    <div className="key inline-flex relative shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
      ${e.code}
      <small className="absolute -top-8 text-white font-medium">
      ${e.code}
      </small>
    </div>
    `;
    // For example, you might want to console.log the event properties
    console.log("Key:", e.key);
    console.log("KeyCode:", e.keyCode);
    console.log("Code:", e.code);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="parent gap-7" id="parent">
      {/* <div className="child gap-10 flex justify-between align-items-center flex-wrap">
        <div className="parent-box">
          <p className="font-semibold">event.key</p>
          <div className="box shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
            <h5>Alt</h5>
          </div>
        </div>
        <div className="parent-box">
          <p className="semibold">event.keyCode</p>
          <div className="box shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
            <h5>18</h5>
          </div>
        </div>
        <div className="parent-box">
          <p className="semibold">event.code</p>
          <div className="box shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
            <h5>AltLeft</h5>
          </div>
        </div>
      </div> */}
      <div className="key inline-flex relative shadow-md bg-slate-100 text-xl  text-center font-bold p-4 rounded-sm">
        Press any key to get the keyCode
        <small className="absolute -top-8 text-white font-medium">
          event.key
        </small>
      </div>
    </div>
  );
}

export default App;
