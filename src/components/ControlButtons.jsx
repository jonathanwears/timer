import React from "react";
import ButtonStartStop from "./ButtonStartStop";
function ControlButtons() {

	return (
		<div className="control-buttons">
			<ButtonStartStop />
			{/* {start && <button>Restart</button>} */}
		</div>
	);

};

export default ControlButtons;