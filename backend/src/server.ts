import express from "express";
import { log, LogType } from "./log";
const app = express();

const PORT = 8080;

import todo from "./api/todo";

app.listen(PORT, () => {
	log(LogType.INFO, `server listening on ${PORT}`);
});

app.use("/todo", todo);
