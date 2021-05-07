import React, { useState } from "react";
import TimerUi from "./TimerUi";

function Timer({ stretchCounter, restCounter }) {

	const [rest, setRest] = useState(true);
	
	return (
		<>
			{rest && <TimerUi initialCount={restCounter} rest={rest} setRest={setRest} />}
			{!rest && <TimerUi initialCount={stretchCounter} rest={rest} setRest={setRest} />}
		</>
	);
};

export default Timer;