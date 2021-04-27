import React, { useState } from "react";
import ControlButtons from "./controlButtons/ControlButtons";
import Counter from "./Counter";
import MappingCounters from "./MappingCounters"


function NewFunction() {

	const [repeat, setRepeat] = useState(1)

	function handleOnchange(event) {
		setRepeat(event.target.value)
	}
	return (
		<div>
			<input type="number" onChange={handleOnchange}></input>
			<ControlButtons />
			<MappingCounters repeat={repeat}/>
		</div>
	);
};

export default NewFunction;