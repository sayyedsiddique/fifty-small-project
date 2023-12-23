import "./App.css";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

function App() {
  const [activeSearch, setActiveSearch] = useState(false);

  const searchHandler = () => {
    setActiveSearch(!activeSearch);
  };
  return (
    <div className="parent">
      <div className={activeSearch ? "child active" : "child"}>
        <input className="searchInput" type="text" placeholder="Search..." />

        <button className="icon-btn" onClick={searchHandler}>
          <IconContext.Provider value={{ size: "24px" }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default App;
