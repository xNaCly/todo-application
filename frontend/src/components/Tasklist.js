import { useEffect, useState } from "react";
import NewTaskButton from "./NewTaskButton";
import { getAllTasks, addTask, updateTask, removeTask } from "../api-wrapper";
import Task from "./Task";
import errormodal from "./errormodal";

export default function TaskList() {
	const [tasks, setTasks] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const f = async () => {
			let res = await getAllTasks();
			setError(errormodal(setError, res));
			if (res?.data) setTasks(res?.data);
			else setTasks([]);
		};
		f();
	}, []);

	function addATask(newTask) {
		let f = async () => {
			let res = await updateTask(newTask);
			setError(errormodal(setError, res));
		};
		f();
		let newArr = [...tasks.filter((e) => e?.id !== newTask?.id), newTask].sort((a, b) => a?.id - b?.id);
		setTasks(newArr);
	}

	function addANewTaskByTitle(title) {
		let f = async () => {
			let res = await addTask(title);
			setError(errormodal(setError, res));
			if (res?.data) setTasks([...tasks, res?.data]);
			else setTasks(tasks);
		};
		f();
	}

	function taskRemoveMethod(id) {
		removeTask(id);
		setTasks([...tasks.filter((e) => e?.id !== id)]);
	}

	let renderedTasks = tasks?.map((e) => (
		<Task taskRemoveMethod={taskRemoveMethod} taskUpdaterMethod={addATask} {...e} key={e?.id} />
	));
	if (!error) {
		return (
			<div className="tasklist">
				{renderedTasks}
				<NewTaskButton addANewTaskByTitle={addANewTaskByTitle} />
			</div>
		);
	} else {
		return error;
	}
}
