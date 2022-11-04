import fetch from "node-fetch";
const config = require("./config.json");
const url = config.backendURL;

async function _fetch({ method, subpath, body, dontAwaitResponse }) {
	console.log(url);
	if (!method) method = "GET";
	if (subpath) subpath = "/" + subpath;
	else subpath = "";
	if (body) body = JSON.stringify(body);
	let headers = {
		"content-type": "application/json; charset=utf-8",
	};
	let req = await fetch(url + subpath, { method, body, headers });
	let res = dontAwaitResponse ? {} : await req.json();
	return res;
}

function getAllTasks() {
	return _fetch({});
}

function getTaskById(id) {
	return _fetch({ subpath: id });
}

async function addTask(title) {
	return _fetch({ method: "POST", body: { title } });
}

async function removeTask(id) {
	await _fetch({ method: "DELETE", subpath: id, dontAwaitResponse: true });
}

function updateTask(task) {
	return _fetch({
		method: "PATCH",
		subpath: task?.id,
		body: {
			title: task?.title,
			finished: task?.finished,
		},
	});
}

export { getAllTasks, getTaskById, removeTask, updateTask, addTask };
