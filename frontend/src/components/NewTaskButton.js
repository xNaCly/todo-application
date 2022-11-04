import React, { useState, useRef } from "react";

export default function NewTaskButton({ addANewTaskByTitle }) {
	const [toggled, setToggle] = useState(false);
	const [taskTitle, setTasktitle] = useState("");

	function submitTask() {
		addANewTaskByTitle(taskTitle);
		setToggle(false);
		setTasktitle("");
	}

	const createModal = (
		<div className="task-modal">
			<h5>New Todo title:</h5>
			<input onChange={(e) => setTasktitle(e.target.value)} type="text"></input>
			<button title="create new todo" onClick={() => submitTask()}>
				{"[↵ ]"}
			</button>
		</div>
	);

	return (
		<div>
			{toggled ? createModal : <div></div>}
			<button title={toggled ? "close" : "new"} onClick={() => setToggle(!toggled)}>{`[${
				toggled ? "close" : "new"
			}]`}</button>
		</div>
	);
}
