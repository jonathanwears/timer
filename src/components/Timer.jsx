import React, { useState } from "react";
import TimerUi from "./TimerUi";

function Timer({ stretchCounter, restCounter }) {

	const [rest, setRest] = useState(true);
	
	return (
		<div>
			{rest && <TimerUi initialCount={restCounter} rest={rest} setRest={setRest} />}
			{!rest && <TimerUi initialCount={stretchCounter} rest={rest} setRest={setRest} />}
		</div>
	);

};

export default Timer;