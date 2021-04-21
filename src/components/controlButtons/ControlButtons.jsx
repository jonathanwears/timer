import React from "react";
import ButtonStartStop from "./ButtonStartStop";
import PauseButton from "./PauseButton";
function ControlButtons() {

	return (
		<div className="control-buttons">
		
			<PauseButton />
			<ButtonStartStop />

		</div>
	);
};

export default ControlButtons;