import React from "react";
import Counter from "./Counter";
function MappingCounters({ repeat }) {

	const counters = [];

	for (let i = 0; i < repeat; i++) {
		counters.push((i));
	};



	return (
		<div>
			{counters.map(() => <Counter />)}
		</div>
	);

};

export default MappingCounters;