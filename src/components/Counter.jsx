import React, { useContext, useReducer } from "react";
import Timer from "../components/Timer";
import { StartContext } from "./StartContext";
import TimerSettings from "./TimerSettings";

function Counter() {

	const { startValues } = useContext(StartContext);
	const [start] = startValues;
	function reducer(state, action) {
		switch (action.type) {
			case "increment": return state + 1;
			case "decrement": return state - 1;
			case "inputValue": return state = action.value;
			default: throw new Error(action.type);
		}
	}

	const [stretchCounter, dispatchStretch] = useReducer(reducer, 60)
	const [restCounter, dispatchRest] = useReducer(reducer, 5)

	return (
		<div>
			{!start && <TimerSettings
				stretchCounter={stretchCounter}
				dispatchStretch={dispatchStretch}
				restCounter={restCounter}
				dispatchRest={dispatchRest}

			/>}
			{start && <Timer stretchCounter={stretchCounter} restCounter={restCounter} />}
		</div>
	);
};

export default Counter;