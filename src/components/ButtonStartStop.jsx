import React, { useContext } from "react";
import { StartContext } from "./StartContext";

function ButtonStartStop() {

	const [start, setStart] = useContext(StartContext);

	function startGame() {
		setStart(!start);
	}

	return (

		<button onClick={startGame}>{start ? "stop" : "start"}</button>
	);
};

export default ButtonStartStop;