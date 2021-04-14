import React, { useState, useEffect } from "react";

function TimerUi({ initialCount, rest, setRest }) {

	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		if (count === 0) {
			setRest(!rest);
		};
	});

	useEffect(() => {
		if (count > 0) {
			setTimeout(() => {
				setCount((count - 1))
			}, 1000)
		};

	}, [count, initialCount]);

	return (<h1>{count}</h1>);

};

export default TimerUi;