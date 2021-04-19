import React, { useState } from "react";
import TimerUi from "./TimerUi";

function Timer() {

	const restTime = 5;
	const stretchTime = 10;
	const pause = false;
	const [rest, setRest] = useState(true);

	return (
		<div>
			{rest && <TimerUi initialCount={restTime} rest={rest} setRest={setRest} pause={pause} />}
			{!rest && <TimerUi initialCount={stretchTime} rest={rest} setRest={setRest} pause={pause} />}
		</div>
	);

};

export default Timer;