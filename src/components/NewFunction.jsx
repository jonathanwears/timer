import React, { useState } from "react";
import ControlButtons from "./controlButtons/ControlButtons";
import MappingCounters from "./MappingCounters"

function NewFunction() {

	const [repeat, setRepeat] = useState(1)

	function handleOnchange(event) {
		setRepeat(event.target.value)
	}

	return (
		<div>
			<input type="number" min="0" onChange={handleOnchange}></input>
			<ControlButtons />
			<MappingCounters repeat={repeat}/>
		</div>
	);
};

export default NewFunction;