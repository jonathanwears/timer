import React from "react";

function CounterSettings({ name, counter, dispatch }) {

	return (
		<div className="stretch-counter">
			<label><h3>{name}</h3></label>
			<button onClick={() => dispatch({ type: "decrement" })}>down</button>
			<input type="number" value={counter} onChange={(event) => { const value = event.target.value; dispatch({ type: "inputValue", value }) }}></input>
			<button onClick={() => dispatch({ type: "increment" })}>up</button>
		</div>
	)
};

export default CounterSettings;

