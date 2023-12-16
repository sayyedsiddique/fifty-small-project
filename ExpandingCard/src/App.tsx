import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(1);

  const cardHandler = (activeValue: any) => {
    setActive(activeValue);
  };

  return (
    <div className="card-container">
      <div
        className={active === 1 ? `card active` : `card`}
        onClick={() => cardHandler(1)}
        style={{
          backgroundImage:
            "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      ></div>
      <div
        className={active === 2 ? `card active` : `card`}
        onClick={() => cardHandler(2)}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      ></div>
      <div
        className={active === 3 ? `card active` : `card`}
        onClick={() => cardHandler(3)}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      ></div>
      <div
        className={active === 4 ? `card active` : `card`}
        onClick={() => cardHandler(4)}
      ></div>
    </div>
  );
}

export default App;
