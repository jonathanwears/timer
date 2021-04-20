import React, { useContext } from "react";
import Timer from "../components/Timer";
import { StartContext } from "./StartContext";

function Counter() {

	const { startValues } = useContext(StartContext);
	const [start] = startValues;

	return (
		start && <Timer />

	);
};

export default Counter;