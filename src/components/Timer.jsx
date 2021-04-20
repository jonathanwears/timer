import React, { useState } from "react";
import TimerUi from "./TimerUi";

function Timer() {

	const restTime = 5;
	const stretchTime = 10;

	const [rest, setRest] = useState(true);

	return (
		<div>
			{rest && <TimerUi initialCount={restTime} rest={rest} setRest={setRest} />}
			{!rest && <TimerUi initialCount={stretchTime} rest={rest} setRest={setRest} />}
		</div>
	);

};

export default Timer;