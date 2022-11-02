import React, { useState } from "react";

export default function NewTaskButton() {
	const [toggled, setToggle] = useState(false);
	const [submit, setSubmit] = useState(false);

	const createModal = (
		<div className="task-modal">
			<button onClick={() => setToggle(!toggled)}>{"[X]"}</button>
			<div>
				<h5>New Todo title:</h5>
				<input type="text"></input>
				<button>{"[submit]"}</button>
			</div>
		</div>
	);

	return (
		<div>
			{toggled ? createModal : <div></div>}
			<button onClick={() => setToggle(!toggled)}>{`[${toggled ? "-" : "+"}]`}</button>
		</div>
	);
}
