import React, { useState, useEffect } from "react";

function TimerUi({ initialCount, rest, setRest, pause }) {

	const [count, setCount] = useState(initialCount);
	

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