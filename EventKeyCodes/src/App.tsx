import "./App.css";

function App() {
  return (
    <div className="parent">
      <div className="child gap-10 flex justify-between align-items-center flex-wrap">
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
      </div>
    </div>
  );
}

export default App;
