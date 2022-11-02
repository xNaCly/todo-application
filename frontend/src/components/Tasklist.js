import NewTaskButton from "./NewTaskButton";
import Task from "./Task";
export default function TaskList({ tasks }) {
	let renderedTasks = tasks.map((e) => <Task {...e} key={e?.id} />);
	return (
		<div className="tasklist">
			{renderedTasks}
			<NewTaskButton />
		</div>
	);
}
