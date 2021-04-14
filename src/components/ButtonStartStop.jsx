import React from "react";

function ButtonStartStop({ start, startGame }) {

	return (

		<button onClick={startGame}>{start ? "stop" : "start"}</button>
	)
};

export default ButtonStartStop;