import React, { useState } from "react";
import './App.css';
import OldFunction from "./components/OldFunction";
import NewFunction from "./components/NewFunction";
import { StartProvider } from "./components/StartContext";

function App() {

  const [type, setType] = useState("old");

  function handleClick(event) {
    if (event.target.value === "old") {
      setType("old");
    } else {
      setType("new");
    };
  };

  return (

    <StartProvider>
      <div className="App">
        {/* <div className="type-buttons">
          <button onClick={handleClick} value={"old"}>Old</button>
          <button onClick={handleClick} value={"new"}>New</button>
        </div> */}
        {type === "old" && <OldFunction />}
        {/* {type === "new" && <NewFunction />} */}
      </div>
    </StartProvider>

  );
};

export default App;
