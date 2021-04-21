import React from "react";

function TimerSettings({stretchCounter, dispatchStretch, restCounter, dispatchRest }) {

	
	return (

		<div className="timer-settings">
			<div className="stretch-counter">
				<button onClick={() => dispatchStretch({ type: "increment" })}> up</button>
				<input type="text" value={stretchCounter} onChange={(event) => { const value = event.target.value; dispatchStretch({ type: "inputValue", value }) }}></input>
				<button onClick={() => dispatchStretch({ type: "decrement" })}> down</button>
			</div>
			<div className="rest-counter">
				<button onClick={() => dispatchRest({ type: "increment" })}> up</button>
				<input type="text" value={restCounter} onChange={(event) => { const value = event.target.value; dispatchRest({ type: "inputValue", value }) }} ></input>
				<button onClick={() => dispatchRest({ type: "increment" })}> down</button>
			</div>
		</div>

	);

};

export default TimerSettings;