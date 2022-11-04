import express from "express";
import { log, LogType } from "./util";
import todo from "./api/todo";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.listen(PORT, HOST, () => {
	log(LogType.INFO, `server listening on ${PORT}`);
});

app.use("/todo", todo);
