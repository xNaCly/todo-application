export default function Task({ title, createdAt, finished, id }) {
	let date = new Date(createdAt);
	return (
		<div className={`task ${finished ? "task-finished" : ""}`}>
			<span className="task-counter">{id}</span>
			<div className="task-content">
				<div>
					<button onClick={() => console.log("test")}>{`[${finished ? "#" : " "}]`}</button>
					<span className="task-title">{title}</span>
				</div>
				<span className="task-date">{date.toLocaleString()}</span>
			</div>
		</div>
	);
}
