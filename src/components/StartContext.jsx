import React, { createContext, useState } from "react";

export const StartContext = createContext();

export const StartProvider = props => {
	const [start, setStart] = useState(false);

	return <StartContext.Provider value={[start, setStart]}>{props.children}</StartContext.Provider>;
};