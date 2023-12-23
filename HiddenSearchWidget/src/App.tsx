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
        <div
          className={
            activeSearch ? "input-container active" : "input-container"
          }
        >
          <input className="searchInput active" type="search" placeholder="Search..." />
        </div>
        <div className="icon-container" onClick={searchHandler}>
          <IconContext.Provider value={{ size: "30px" }}>
            <FaSearch />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
