import React, { useContext } from "react";
import { StartContext } from "../StartContext";

function ButtonStartStop() {

	const { startValues } = useContext(StartContext);
	const [start, setStart] = startValues;
	function startGame() {
		setStart(!start);
	};

	return (
		<button onClick={startGame}>{start ? "reset" : "start"}</button>
	);
};

export default ButtonStartStop;