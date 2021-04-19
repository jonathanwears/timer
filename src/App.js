import React, { useContext, useState } from "react";
import './App.css';
import ControlButtons from "./components/ControlButtons";
import Counter from "./components/Counter";
import {  StartProvider } from "./components/StartContext";

function App() {

  const [count, setCount] = useState(5);
 

  return (

    <StartProvider>
      <div className="App">

        <ControlButtons />
        
        <Counter setCount={setCount} />

      </div>
    </StartProvider>

  );
}

export default App;
