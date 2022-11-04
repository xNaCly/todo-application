export default function Task({ taskRemoveMethod, taskUpdaterMethod, title, createdAt, finished, id }) {
	let date = new Date(createdAt);
	return (
		<div className={`task ${finished ? "task-finished" : ""}`}>
			<div className="task-controller">
				<span className="task-counter">{id}</span>
				<button
					title={finished ? "mark task as open" : "mark task as finished"}
					onClick={() => taskUpdaterMethod({ title, createdAt, id, finished: !finished })}>{`[${
					finished ? "open" : "done"
				}]`}</button>
				<button title="delete task" onClick={() => taskRemoveMethod(id)}>
					{"[delete]"}
				</button>
			</div>
			<div className="task-content">
				<span className="task-title">{title}</span>
				<span className="task-date">{date.toLocaleString()}</span>
			</div>
		</div>
	);
}
