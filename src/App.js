import React from "react";
import './App.css';
import ControlButtons from "./components/controlButtons/ControlButtons";
import Counter from "./components/Counter";
import { StartProvider } from "./components/StartContext";


function App() {


  return (

    <StartProvider>
      <div className="App">

        <ControlButtons />
        <Counter />

      </div>
    </StartProvider>

  );
}

export default App;
