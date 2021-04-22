import React from "react";
import CounterSettings from "./CounterSettings";

function TimerSettings({ stretchCounter, dispatchStretch, restCounter, dispatchRest }) {

	return (
		<div className="timer-settings">
			<CounterSettings name="Stretch" counter={stretchCounter} dispatch={dispatchStretch} />
			<CounterSettings name="Rest" counter={restCounter} dispatch={dispatchRest} />
		</div>
	);
};

export default TimerSettings;