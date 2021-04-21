import React, { createContext, useState} from "react";

export const StartContext = createContext();

export const StartProvider = props => {

	const [start, setStart] = useState(false);
	const [pause, setPause] = useState(false);


	return (
		<StartContext.Provider value={{ startValues: [start, setStart], pauseValues: [pause, setPause]}} >
			{props.children}
		</StartContext.Provider>
	);

};