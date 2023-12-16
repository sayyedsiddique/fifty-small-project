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
        // style={{
        //   backgroundImage:
        //     "https://plus.unsplash.com/premium_photo-1701198465491-f6fcab559150?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        // }}
      >
        <h3 className={active === 1 ? `title active` : `title`}>Explore The World</h3>
      </div>
      <div
        className={active === 2 ? `card active` : `card`}
        onClick={() => cardHandler(2)}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
         <h3 className={active === 2 ? `title active` : `title`}>Mountains Cloud</h3>
      </div>
      <div
        className={active === 3 ? `card active` : `card`}
        onClick={() => cardHandler(3)}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
         <h3 className={active === 3 ? `title active` : `title`}>Swimming In The Ocean</h3>
      </div>
      <div
        className={active === 4 ? `card active` : `card`}
        onClick={() => cardHandler(4)}
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1701198465491-f6fcab559150?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
         <h3 className={active === 4 ? `title active` : `title`}>Man standing on sand</h3>
      </div>
    </div>
  );
}

export default App;
