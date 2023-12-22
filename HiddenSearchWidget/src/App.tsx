import "./App.css";
import { FaSearch } from "react-icons/fa";
import { IconContext } from 'react-icons';

function App() {
  return (
    <div className="parent">
      <div className="child">
        <input type="search" placeholder="Search..."/>
        <div className="icon-container">
          <IconContext.Provider value={{size: "30px" }}>
            <FaSearch />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
