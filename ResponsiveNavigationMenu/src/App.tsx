import { useState } from "react";
import "./App.css";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  const hamburgerMenuHandler = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <div className="parent">
      <nav>
        <div id="menu-icon" onClick={hamburgerMenuHandler}>
          &#9776;
        </div>
        <ul className={menuToggle ? "show" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
