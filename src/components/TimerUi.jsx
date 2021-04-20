import React, { useState, useEffect, useContext } from "react";
import { StartContext } from "./StartContext";

function TimerUi({ initialCount, rest, setRest }) {

	const [count, setCount] = useState(initialCount);
	const { pauseValues } = useContext(StartContext);
	const [pause] = pauseValues;


	useEffect(() => {
		if (count === 0) {
			setRest(!rest);
		};
	});

	useEffect(() => {
		if (!pause && count >= 0) {
			setTimeout(() => {
				setCount((count - 1))
			}, 1000)
		};

	}, [count, setCount, pause]);

	return (<h1>{count}</h1>);

};

export default TimerUi;