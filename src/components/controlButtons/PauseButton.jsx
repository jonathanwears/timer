import React, { useContext } from "react";
import { StartContext } from "../StartContext";

function PauseButton() {


	const { startValues, pauseValues } = useContext(StartContext);
	const [start] = startValues;
	const [pause, setPause] = pauseValues;

	function handlePauseClick() {
		setPause(!pause);

	};

	return start && <button onClick={handlePauseClick}>{pause ? "unpause" : "pause"}</button>

};

export default PauseButton;