import React from "react";
import ButtonStartStop from "./ButtonStartStop";
import RestartButton from "./RestartButton";
import PauseButton from "./PauseButton";
function ControlButtons() {

	return (
		<div className="control-buttons">
			<ButtonStartStop />
			<RestartButton />
			<PauseButton />
		</div>
	);
};

export default ControlButtons;