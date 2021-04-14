import React, { useState } from "react";
import './App.css';
import ButtonStartStop from "./components/ButtonStartStop";
import Counter from "./components/Counter";

function App() {

  const [start, setStart] = useState(false);
  const [count, setCount] = useState(5);

  function startGame() {
    // 60 then 5
    setStart(!start)
    // because of slow state setting

  };

  return (

    <div className="App">

      <ButtonStartStop start={start} startGame={startGame} />
      {start && <button>Restart</button>}
      <Counter start={start} setStart={setStart} count={count} setCount={setCount} />

    </div>
  );
}

export default App;
