import "./App.css";
import TaskList from "./components/Tasklist";

const exampleTasks = [
	{
		title: "title",
		createdAt: Date.now(),
		finished: true,
		id: 1,
	},
	{
		title: "title",
		createdAt: Date.now(),
		finished: false,
		id: 2,
	},
	{
		title: "title",
		createdAt: Date.now(),
		finished: false,
		id: 3,
	},
	{
		title: "title",
		createdAt: Date.now(),
		finished: false,
		id: 4,
	},
];

function App() {
	return (
		<div id="App">
			<TaskList tasks={exampleTasks}></TaskList>
		</div>
	);
}

export default App;
