import React from "react";
import beep from "../assets/beep-07.wav";
import Timer from "../components/Timer";

function Counter({ start, setStart, setCount }) {


	//reset timers
	function reset() {
		setStart(false);
		setCount(5);
	};

	return (
		start && <Timer />
	)
};

export default Counter;