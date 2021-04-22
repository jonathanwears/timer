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
			case "decrement":
				if ((state - 1) <= 0) {
					return 0;
				}
				return state - 1;
			case "inputValue":
				let input = inputValidation(action);
				return input;
			default: throw new Error(action.type);
		};
	};

	function inputValidation(action) {
		const parsedValue = parseInt(action.value)
		if (Number.isNaN(parsedValue)) {
			return "";
		}
		return parsedValue;
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
			{start && <Timer
				stretchCounter={stretchCounter}
				restCounter={restCounter}

			/>}
		</div>
	);
};

export default Counter;