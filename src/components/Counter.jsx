import React, { useContext } from "react";
import Timer from "../components/Timer";
import { StartContext } from "./StartContext";

function Counter({ setCount }) {

	const [start, setStart] = useContext(StartContext);

	return (
		start && <Timer />
		
	)
};

export default Counter;