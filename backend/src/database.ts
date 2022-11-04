import { PrismaClient } from "@prisma/client";
import { log, LogType } from "./util";

class Database {
	private db: PrismaClient;

	constructor() {
		this.open();
	}

	private open() {
		this.db = new PrismaClient();
	}

	async insertNewTask(title: string): Promise<Todo> {
		let createdAt = new Date();

		return await this.db.todo.create({
			data: {
				title,
				createdAt,
				finished: false,
			},
		});
	}

	async getTaskById(id: number): Promise<Todo | null> {
		return await this.db.todo.findFirst({
			where: { id },
		});
	}

	async getTasks(): Promise<Todo[] | null> {
		return await this.db.todo.findMany();
	}

	async updateTask(id: number, title: string, finished: boolean): Promise<Todo | null> {
		try {
			return await this.db.todo.update({
				where: {
					id,
				},
				data: {
					title,
					finished,
				},
			});
		} catch (e) {
			log(LogType.ERROR, e);
			return null;
		}
	}

	async deleteTaskById(id: number): Promise<Todo | null> {
		try {
			return await this.db.todo.delete({
				where: { id },
			});
		} catch (e) {
			log(LogType.ERROR, e);
			return null;
		}
	}

	close() {
		this.db.$disconnect();
	}
}

export default new Database();
