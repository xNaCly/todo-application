import express, { Request, Response } from "express";
import db from "../database";
import { errorFeedback } from "../util";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
	const todos: Todo[] = (await db.getTasks()) || [];
	res.send({ data: todos });
});

router.get("/:id", async (req: Request, res: Response) => {
	let { id } = req.params;
	let convertedId = parseInt(id);

	if (Number.isNaN(convertedId)) {
		let err = errorFeedback(400, "missing request parameter id");
		return res.status(err.code).send({ err });
	}

	const todo = await db.getTaskById(parseInt(id));

	if (!todo) {
		let err = errorFeedback(404, `todo with id '${convertedId}' not found`);
		return res.status(err.code).send({ err });
	}

	res.send({ data: todo });
});

router.post("/", async (req: Request, res: Response) => {
	const { title }: { title: string } = req.body;

	if (!title || title.length === 0) {
		let err = errorFeedback(400, "missing or empty request body key value pair: 'title'");
		return res.status(err.code).send({ err });
	}

	let todo = await db.insertNewTask(title);
	res.status(201).send({ data: todo });
});

router.delete("/:id", async (req: Request, res: Response) => {
	let { id } = req.params;
	let convertedId = parseInt(id);

	if (Number.isNaN(convertedId)) {
		let err = errorFeedback(400, "missing request parameter id");
		return res.status(err.code).send({ err });
	}

	const todo = await db.deleteTaskById(convertedId);

	if (!todo) {
		let err = errorFeedback(404, `deleting todo with id '${id}' failed, possible cause: todo not found`);
		return res.status(err.code).send({ err });
	}

	res.sendStatus(200);
});

router.patch("/:id", async (req: Request, res: Response) => {
	const { title, finished }: { title: string; finished: boolean } = req.body;
	let { id } = req.params;

	let convertedId = parseInt(id);

	if (!title || title.length === 0) {
		let err = errorFeedback(400, "missing or empty request body key value pair: 'title'");
		return res.status(err.code).send({ err });
	}

	if (Number.isNaN(convertedId)) {
		let err = errorFeedback(400, "missing request parameter id");
		return res.status(err.code).send({ err });
	}

	const todo = await db.updateTask(convertedId, title, finished);

	if (!todo) {
		let err = errorFeedback(404, `updating todo with id '${id}' failed, possible cause: todo not found`);
		return res.status(err.code).send({ err });
	}

	res.status(200).send({ data: todo });
});

export default router;
