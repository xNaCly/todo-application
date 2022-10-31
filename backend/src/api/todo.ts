import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	res.send({ hello: "world" });
});

router.post("/", (req: Request, res: Response) => {
	res.status(201).send({ hello: "world" });
});

router.delete("/:id", (req: Request, res: Response) => {
	res.sendStatus(200);
});

router.put("/:id", (req: Request, res: Response) => {
	res.sendStatus(200);
});

export default router;
